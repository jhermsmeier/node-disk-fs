var inherit = require( 'derive' ).inherit
var Emitter = require( 'events' ).EventEmitter

/**
 * Watcher Constructor
 * @return {Watcher}
 */
function Watcher() {
  
  if( !(this instanceof Watcher) )
    return new Watcher()
  
  Emitter.call( this )
  
}

// Exports
module.exports = Watcher

/**
 * Watcher Prototype
 * @type {Object}
 */
Watcher.prototype = {
  
  constructor: Watcher,
  
  close: function() {
    
  }
  
}

// Inherit from EventEmitter
inherit( Watcher, Emitter )
