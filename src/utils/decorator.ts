/*
 * @Description:装饰器
 * @Author: 徐长剑
 * @Date: 2019-11-14 15:24:36
 * @LastEditTime: 2019-11-14 18:43:32
 * @LastEditors: 徐长剑
 */
export const BindThis = (target: any, key: string, descriptor: PropertyDescriptor) => {
  let fn = descriptor.value
  if (typeof fn !== 'function') {
    throw new TypeError(`@BindThis decorator can only be applied to methods not: ${typeof fn}`)
  }

  return {
    configurable: true,
    get() {
      if (this === target.prototype || this.hasOwnProperty(key) || typeof fn !== 'function') {
        return fn
      }

      const _fn = fn.bind(this)

      Object.defineProperty(this, key, {
        configurable: true,
        get() {
          return _fn
        },
        set(value) {
          fn = value
          delete this[key]
        },
      })
      // flags = false
      return _fn
    },
    set<T>(val: T): T {
      return val
    },
  }
}
export const BindThisClass = (target: any) => {
  let _keys = Object.getOwnPropertyNames(target.prototype)

  console.log(target.prototype, 'target.prototype', _keys)
  _keys.map(key => {
    if (key === 'constructor') return
    const descriptor: any = Object.getOwnPropertyDescriptor(target.prototype, key)
    // Only methods need binding
    if (typeof descriptor.value === 'function') {
      Object.defineProperty(target.prototype, key, BindThis(target, key, descriptor))
    }
  })
}

export const FormValidate = (form: string): any => (
  target: any,
  key: string,
  descriptor: PropertyDescriptor,
) => {
  let fn = descriptor.value
  if (typeof fn !== 'function') {
    throw new TypeError(`@FormValidate decorator can only be applied to methods not: ${typeof fn}`)
  }
  return {
    configurable: true,
    value(...args: any[]): any {
      const _props = (this as any).props
      let params: any
      if (_props[form]) {
        _props[form]['validateFields']((err: string, val: any) => {
          if (!err) {
            params = val
          }
        })
      }
      if (params) {
        return fn.apply(this, [...args, params])
      }
    },
  }
}

export const Debounce = (timeout: number): any => {
  const _Maps = new Map() // 创建一个Map的数据结构，将实例化对象作为key

  return (target: any, key: string, descriptor: PropertyDescriptor): any => {
    let fn = descriptor.value
    if (typeof fn !== 'function') {
      throw new TypeError(`@Debounce decorator can only be applied to methods not: ${typeof fn}`)
    }

    return {
      ...descriptor,
      value(...args: any[]): any {
        clearTimeout(_Maps.get(this))
        // 设置延时器
        _Maps.set(
          this,
          setTimeout(() => {
            // 调用该方法
            console.log(args, 'args')
            fn.apply(this, args)
            // 将延时器设置为 null
          }, timeout),
        )
      },
    }
  }
}
