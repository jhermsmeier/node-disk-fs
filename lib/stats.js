/**
 * Stats Constructor
 * @return {Stats}
 */
function Stats() {
  
  if( !(this instanceof Stats) )
    return new Stats()
  
  this.dev     = 0
  this.ino     = 0
  this.mode    = 0
  this.nlink   = 0
  this.uid     = 0
  this.gid     = 0
  this.rdev    = 0
  this.size    = 0
  this.blksize = 0
  this.blocks  = 0
  
  this.atime = new Date()
  this.mtime = new Date()
  this.ctime = new Date()
  
}

// Exports
module.exports = Stats

/**
 * Stats Prototype
 * @type {Object}
 */
Stats.prototype = {
  
  constructor: Stats,
  
  isFile: function() {
    return throw new Error( 'Not implemented' )
  },
  
  isDirectory: function() {
    return throw new Error( 'Not implemented' )
  },
  
  isBlockDevice: function() {
    return throw new Error( 'Not implemented' )
  },
  
  isCharacterDevice: function() {
    return throw new Error( 'Not implemented' )
  },
  
  isSymbolicLink: function() {
    return throw new Error( 'Not implemented' )
  },
  
  isFIFO: function() {
    return throw new Error( 'Not implemented' )
  },
  
  isSocket: function() {
    return throw new Error( 'Not implemented' )
  }
  
}
