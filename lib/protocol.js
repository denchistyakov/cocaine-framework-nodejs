
var _RPC = [
  'handshake',
  'heartbeat',
  'terminate',
  'invoke',
  'chunk',
  'error',
  'choke'
]

var RPC = {}

_RPC.map(function(m,id){
  RPC[m] = id
})

var TERMINATE = {
  normal:1,
  abnormal:2
}

module.exports = {
  RPC:RPC,
  _RPC:_RPC,
  TERMINATE:TERMINATE
}
