
const express = require( "express" )
const PATH = require( "path" )
const webpack = require( "webpack" )
import webpackDevServer from 'webpack-dev-server'

import { PORT } from '../config'
import webpackConfig from '../webpack.config'
import { OUTPUT, OUTPUT_INDEX_HTML } from './constants'
import { __DEV__ } from './global'

export default function() {
  

  if ( !__DEV__ ) {
    const compiler = webpack( webpackConfig )
    compiler.run( ( err, stats ) => {
      if ( err ) {
        console.error( err )
        return
      }

      console.log(
        stats.toString( {
          chunks: false,
          colors: true,
        } )
      )
    } )
    return
  }

  if ( __DEV__ ) {
    const options = {
      hot : true,
      host: "localhost",
    }
    webpackDevServer.addDevServerEntrypoints( webpackConfig, options )
    const compiler = webpack( webpackConfig )
    const logPort = () => console.log( `\nlistening on the`, `\x1b[32m`, `http://localhost:${PORT}`, `\x1b[0m\n` )

    compiler.hooks.done.tap( "tsblog", logPort )
    const server = new webpackDevServer( compiler, options )
    server.listen( PORT, "localhost" )
  }
}
