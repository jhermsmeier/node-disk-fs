var Stream = require( 'stream' )

/**
 * FileSystem constructor
 * @param {Object} options
 */
function FileSystem( options ) {
  
  if( !(this instanceof FileSystem) )
    return new FileSystem( options )
  
}

// Exports
module.exports = FileSystem

/**
 * FileSystem Stats
 * @type {Function}
 */
FileSystem.Stats = require( './stats' )

/**
 * FileSystem Watcher
 * @type {Function}
 */
FileSystem.Watcher = require( './watcher' )

/**
 * Device FileSystem prototype
 * @type {Object}
 */
FileSystem.prototype = {
  
  constructor: FileSystem,
  
  init: function( done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  rename: function( oldPath, newPath, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  ftruncate: function( fd, len, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  truncate: function( path, len, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  chown: function( path, uid, gid, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  fchown: function( fd, uid, gid, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  lchown: function( path, uid, gid, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  chmod: function( path, mode, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  fchmod: function( fd, mode, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  lchmod: function( path, mode, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  stat: function( path, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  lstat: function( path, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  fstat: function( fd, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  link: function( srcpath, dstpath, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  symlink: function( srcpath, dstpath, type, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  readlink: function( path, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  realpath: function( path, cache, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  unlink: function( path, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  rmdir: function( path, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  mkdir: function( path, mode, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  readdir: function( path, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  close: function( fd, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  open: function( path, flags, mode, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  utimes: function( path, atime, mtime, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  futimes: function( fd, atime, mtime, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  write: function( fd, buffer, offset, length, position, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  read: function( fd, buffer, offset, length, position, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  readFile: function( filename, options, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  writeFile: function( filename, data, options, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  appendFile: function( filename, data, options, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  exists: function( path, done ) {
    done.call( this, new Error( 'Not implemented' ) )
  },
  
  watch: function( filename, options, listener ) {
    
    var watcher = new FileSystem.Watcher()
    
    process.nextTick( function() {
      watcher.emit( 'error', new Error( 'Not implemented' ) )
    })
    
    return watcher
    
  },
  
  createReadStream: function( path, options ) {
    
    var stream = new Stream.PassThrough()
    
    process.nextTick( function() {
      stream.emit( 'error', new Error( 'Not implemented' ) )
    })
    
    return stream
    
  },
  
  createWriteStream: function( path, options ) {
    
    var stream = new Stream.PassThrough()
    
    process.nextTick( function() {
      stream.emit( 'error', new Error( 'Not implemented' ) )
    })
    
    return stream
    
  },
  
}
