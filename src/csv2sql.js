const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const writer = require('csv-to-sql-script');


yargs(hideBin(process.argv))
  .command('run', 'Converts the input csv into a sql file', (yargs) => {
    return yargs
      .positional('input', {
        describe: 'The path to csv file',
        alias: 'i',
        default: null
      })
      .positional('output', {
        describe: 'The path for the output file',
        default: null,
        alias: 'o'
      })
      .positional('table', {
        describe: 'The table name',
        default: 'YOUR_TABLE',
        alias: 't'
      })
      .positional('createTable', {
        describe: 'When true a create table script will be generated (ignored for update script)',
        default: null,
        type: 'boolean',
        alias: 'c'
      })
      .positional('updateColumn', {
        describe: 'The column that will be used in the update where statement',
        default: null,
        alias: 'u'
      })
  }, (argv) => {
    if (argv.verbose) console.info(`start server on :${argv.port}`)
    console.log(argv);
    writer.writeMigration(argv.i, argv.o, argv.t, {
		  updateWhereColumn: argv.updateColumn,
		  createTable: argv.updateColumn ? false : argv.createTable
	  });	
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .option('')
  .parse()