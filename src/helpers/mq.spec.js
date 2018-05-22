/**
 * @jest-environment node
 */
 import mq from './mq'

 const expectString = original => expect(original.toString())

 const feature = (name, kinds) =>
   describe(name, () => {
     Object.entries(kinds).forEach(([kindName, testFn]) =>
       it('can invoke ' + name + ' as a ' + kindName, () => testFn()),
     )
   })

 describe('mq', () => {
   it('assigns a default unit for certain values when given a number', () => {
     expectString(mq().width(300)).toBe('@media (width:300px)')
   })
   it('doesnt add a default unit when the given value is a string', () => {
     expectString(mq().width('300em')).toBe('@media (width:300em)')
   })
   it('accepts a range of values using from and to methods', () => {
     expectString(
       mq()
         .from({ width: 300 })
         .to({ width: 750 }),
     ).toBe('@media (min-width:300px) and (max-width:750px)')
   })
   it('accepts width ranges by passing just the number to from and to', () => {
     expectString(
       mq()
         .from(300)
         .to(750),
     ).toBe('@media (min-width:300px) and (max-width:750px)')
   })
   it('accepts enum values as their own methods', () => {
     expectString(mq().portrait()).toBe('@media (orientation:portrait)')

     expectString(
       mq()
         .landscape()
         .interlace(),
     ).toBe('@media (orientation:landscape) and (scan:interlace)')
   })
   it('accepts boolean features as their own methods', () => {
     expectString(mq().color()).toBe('@media (color)')

     expectString(
       mq()
         .color()
         .grid(),
     ).toBe('@media (color) and (grid)')
   })
   it('accepts value queries as methods', () => {
     expectString(mq().width(300)).toBe('@media (width:300px)')
     expectString(
       mq()
         .width(300)
         .resolution(250),
     ).toBe('@media (width:300px) and (resolution:250dpi)')
   })
   it('accepts media types', () => {
     expectString(
       mq('screen')
         .from(300)
         .to(750),
     ).toBe('@media screen and (min-width:300px) and (max-width:750px)')
   })
   it('transforms certain booleans to inline values', () => {
     expectString(mq().hover()).toBe('@media (hover:hover)')
     expectString(mq().hover(false)).toBe('@media (hover:none)')
     expectString(mq().anyHover()).toBe('@media (any-hover:hover)')
     expectString(mq().anyHover(false)).toBe('@media (any-hover:none)')
   })
   it('allows for unsupported queries to be added using the "feature" method', () => {
     expectString(mq().feature('superfluous-mahogany', 'manatee')).toBe(
       '@media (superfluous-mahogany:manatee)',
     )
   })
   it('supports 4 media type methods', () => {
     expectString(
       mq()
         .screen()
         .width(350)
         .height(500),
     ).toBe('@media screen and (width:350px) and (height:500px)')
     expectString(
       mq()
         .screen()
         .all()
         .print()
         .speech()
         .width(350)
         .height(500),
     ).toBe(
       '@media screen, all, print, speech and (width:350px) and (height:500px)',
     )
   })

   describe('Media Features:', () => {
     feature('aspect-ratio', {
       value: () =>
         expectString(mq().aspectRatio('1/1')).toBe('@media (aspect-ratio:1/1)'),
       range: () =>
         expectString(
           mq()
             .from({ aspectRatio: '1/1', width: 300 })
             .to({ aspectRatio: '5/1', width: 750 }),
         ).toBe(
           '@media (min-aspect-ratio:1/1) and (min-width:300px) and (max-aspect-ratio:5/1) and (max-width:750px)',
         ),
     })
     feature('update', {
       keyword: () => {
         expectString(mq().update('fast')).toBe('@media (update:fast)')
         expectString(mq().update('slow')).toBe('@media (update:slow)')
         expectString(mq().update(false)).toBe('@media (update:none)')
       },
     })
     feature('overflow-block', {
       value: () => {
         expectString(mq().overflowBlock('optional-paged')).toBe(
           '@media (overflow-block:optional-paged)',
         )
         expectString(mq().overflowBlock(false)).toBe(
           '@media (overflow-block:none)',
         )
       },
     })
     feature('overflow-inline', {
       keyword: () => {
         expectString(mq().overflowInline('scroll')).toBe(
           '@media (overflow-inline:scroll)',
         )
         expectString(mq().overflowInline(false)).toBe(
           '@media (overflow-inline:none)',
         )
       },
     })
   })
 })
