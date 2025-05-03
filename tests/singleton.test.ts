import { describe, it, expect } from 'vitest'
import { Singleton } from '../src/creational/singleton.ts'

describe('Singleton Pattern', () => {
  it('should always return the same instance', () => {
    const a = Singleton.getInstance()
    const b = Singleton.getInstance()
    expect(a).toBe(b)
    expect(a.say()).toBe('我是唯一实例')
  })
})
