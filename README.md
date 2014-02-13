Disk File System
================

Abstract base class/prototype for [node-disk] file system implementations. It's purpose is to be a reference for implementors and also to provide a fallback layer when in use with node-disk; middleware file system implementations will be extended by it to ensure graceful error handling in the case that a particular method has not been implemented by the middleware.

[node-disk]: https://github.com/jhermsmeier/node-disk
