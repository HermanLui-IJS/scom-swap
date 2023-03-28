export default {
"abi":[
{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},
{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"_WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"chainlinkDeicmals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"payload","type":"bytes"}],"name":"getLatestPrice","outputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"getRatio","outputs":[{"internalType":"uint256","name":"numerator","type":"uint256"},{"internalType":"uint256","name":"denominator","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"isSupported","outputs":[{"internalType":"bool","name":"supported","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"priceFeedAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}
],
"bytecode":"60a06040526001805460ff1916601217905534801561001d57600080fd5b507fbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c000000000000000000000000608052600060208190527fc232616c49971d2d6cc1f9bed9863e6fe166ed396093b508a2dabb7e05849f8980546001600160a01b0319908116732d5fc41d1365ffe13d03d91e82e04ca878d69f4b179091557f2fd76cfb49d3383b2a06baf321cf3e4267eb5cb4e5c9f424191270833864efcf80548216737bc032a7c19b1bdcb981d892854d090cfb0f238e1790557fb41bebd0674afddd5a4a7ccd0ba78afe74ae332a370cbd975d719d58540c836880548216733334bf7ec892ca03d1378b51769b7782eaf318c41790557f322760051a4d84056fa6138ad1f9136d0df232e015a4360ea4b44024e90a2f0480548216732a548935a323bb7329a5e3f1667b979f16bc890b1790557f78cd3e87f290189711799215c327c68a9a89104f2850f1517b12722a7a06ed7a8054821673116eeb23384451c78ed366d4f67d5ad44ee771a01790557f495f8d7ba2c5b4606192240ab7c4ec912e0b0d5434bd8989115c64eb51f4f40c805482167387ea38c9f24264ec1fff41b04ec94a97caf999411790557f598aedd7b40f74262335242e69a57f329ce2369fa76aea2ddefbfd490d605a778054821673cb23da9ea243f53194cbc2380a6d4d9bc046161f1790557f2950d9afbc5ae56a15f9b239e044b5ccdcabe26471aefc5b1ed45077eecab95d80548216736f55dfaf098a813d87bb4e6392275b502360bb9d1790557f08b08839fd132cfe6d712804575010fbc6b0bdc78adfeaa113c5c0a7cbad9a5a80548216738ec213e7191488c7873cec6dac8e97cdbadb7b351790557fa614c127f4fbe8f573eee3aed8a7c0c065891f8b3a0e3c30e4e530c50a37c8698054821673ba8683e9c3b1455be6e18e7768e8cad95eb5ed491790557f87ad6d642a37e8af0b1f6b662a412cc875b6f4ea45a7e1a4c60bbce0ae0be1398054821673ed93f3764334788f2f6628b30e505fe1fc5d1d7b1790557f2bf6f7cca866a9418e719dd9b31663cd83745a500e0295d31d413e0e0ff42475805482167363d407f32aa72e63c7209ce1c2f5da40b3aae7261790557fba3c219f0ecc198160cb113e97087a0efb9671c678bd4b99cdb7390fe001bf478054821673b38722f6a608646a538e882ee9972d15c86fc5971790557fa608c515ceb52508e7c7f2935790e437c3a856e9a880424c61db40a69df37ab580548216734e5a43a79f53c0a8e83489648ea7e429278f8b2d1790557f56c3a291628faf0deffa7e0658d11e6325c46500ebcc6c32593dd3ed0cb523d880548216737e728dfa6bca9023d9abee759fdf56beab8ac7ad1790557fd4187960d8e14595954dfc8de3270472baacfaaf992e341d5e2ea3c02ecc7e98805482167345f86ca2a8bc9ebd757225b19a1a0d7051be46db1790557f75a19152562baa2463adfc9e32b10635714b7aec97670f598eb1da6e2a56b10f8054821673d5c40f5144848bd4ef08a9605d860e727b9915131790557f95df50055e3a1879255cba1acc45bf1c20e090cceeec0596e02fcbd99082d6fa8054821673798a65d349b2b5e6645695912880b54dffd790741790557fffca1b6a0432eaa3f6c4d9dc9652a78a41ae5bf0badd233290aa7d8a2e4b65fb80548216738264d6983b219be65c4d62f1c82b3a2999944cf21790557388f1a5ae2a3bf98aeaf342d26b30a79438c9142e9091527fbb8fa9164d3db38a50dc99355f86333618bceb1ab5b479a16b8a68c48ac82c08805490911673f841761481df19831ccc851a54d8350ae602258317905560805160601c610be86105626000398061034e52806103d252806104db528061058752806106205250610be86000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638e9e56ef1161005b5780638e9e56ef146101fe578063a2f4a28714610206578063ad5c46481461020e578063d9da4fe61461021657610088565b8063313ce5671461008d578063495e4348146100ab57806375aa41741461015357806388462c8d146101af575b600080fd5b6100956102d1565b6040805160ff9092168252519081900360200190f35b610141600480360360608110156100c157600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169181019060608101604082013564010000000081111561010257600080fd5b82018360208201111561011457600080fd5b8035906020019184600183028401116401000000008311171561013657600080fd5b5090925090506102d6565b60408051918252519081900360200190f35b6101866004803603602081101561016957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610322565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101ea600480360360408110156101c557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661034a565b604080519115158252519081900360200190f35b6100956104b8565b6101866104c1565b6101866104d9565b6102b8600480360360a081101561022c57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359181019060a08101608082013564010000000081111561027957600080fd5b82018360208201111561028b57600080fd5b803590602001918460018302840111640100000000831117156102ad57600080fd5b5090925090506104fd565b6040805192835260208301919091528051918290030190f35b601290565b60008060006102ea878760008089896104fd565b90925090506103178161030b84670de0b6b3a764000063ffffffff6107a616565b9063ffffffff61082016565b979650505050505050565b60006020819052908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156103d0575073ffffffffffffffffffffffffffffffffffffffff8082166000908152602081905260409020541615156104b2565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610454575073ffffffffffffffffffffffffffffffffffffffff8083166000908152602081905260409020541615156104b2565b73ffffffffffffffffffffffffffffffffffffffff808416600090815260208190526040808220548584168352912054908216911681158015906104ad575073ffffffffffffffffffffffffffffffffffffffff811615155b925050505b92915050565b60015460ff1681565b73bb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c81565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000808673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff161415610585576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180610b3c6029913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16141561061e5773ffffffffffffffffffffffffffffffffffffffff80881660009081526020819052604081205490911661060c81610862565b60ff16600a0a9450925061079b915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614156106b85773ffffffffffffffffffffffffffffffffffffffff8089166000908152602081905260408120549091166106a581610862565b90945060ff16600a0a925061079b915050565b73ffffffffffffffffffffffffffffffffffffffff808916600090815260208190526040812054909116906106ec82610862565b73ffffffffffffffffffffffffffffffffffffffff808c16600090815260208190526040812054939750919350919091169061072782610862565b909550905060ff808416908216111561076a5761076361075360ff83811690861663ffffffff6109c916565b8790600a0a63ffffffff6107a616565b9550610796565b61079361078360ff85811690841663ffffffff6109c916565b8690600a0a63ffffffff6107a616565b94505b505050505b965096945050505050565b6000826107b5575060006104b2565b828202828482816107c257fe5b0414610819576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610b656021913960400191505060405180910390fd5b9392505050565b600061081983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610a0b565b60008073ffffffffffffffffffffffffffffffffffffffff83166108e757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4f535741503a2070726963652066656564206e6f7420666f756e640000000000604482015290519081900360640190fd5b60008373ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b15801561092f57600080fd5b505afa158015610943573d6000803e3d6000fd5b505050506040513d60a081101561095957600080fd5b506020015160015460ff1692509050600081136109c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180610b86602d913960400191505060405180910390fd5b939092509050565b600061081983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610ac7565b60008183610ab1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610a76578181015183820152602001610a5e565b50505050905090810190601f168015610aa35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610abd57fe5b0495945050505050565b60008184841115610b33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201818152835160248401528351909283926044909101919085019080838360008315610a76578181015183820152602001610a5e565b50505090039056fe4f535741503a2066726f6d20616e6420746f2061646472657373657320617265207468652073616d65536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f535741505f4f7261636c65436861696e6c696e6b3a204e65676174697665206f72207a65726f207072696365a26469706673582212203ba0df258216026acf1c57136e26ca19281d3c0f4b659ef8bd500d7fce75066d64736f6c634300060b0033"
}