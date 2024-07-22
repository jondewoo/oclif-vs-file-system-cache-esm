import {Args, Command, Flags} from '@oclif/core'
import {Cache} from 'file-system-cache'

export default class Hello extends Command {
  static args = {
    person: Args.string({description: 'Person to say hello to', required: true}),
  }

  static description = 'Say hello'

  static examples = [
    `<%= config.bin %> <%= command.id %> friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    from: Flags.string({char: 'f', description: 'Who is saying hello', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Hello)
    const cache = new Cache({})
    const test = await cache.get('test')
    if (test) {
      this.log('cache hit')
    } else {
      cache.set('test', 'test')
      this.log('cache miss')
    }

    this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`)
  }
}
