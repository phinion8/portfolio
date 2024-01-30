'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "42dfb9a7f91a679f10be2d3f632d1aa6",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "70299cb3f6a377c20f55f9f2866ba789",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "73708e3c73e4c08d100e79be68a6b939",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f91429b49e8ae625d9a15ba2346a308a",
".git/logs/refs/heads/master": "f91429b49e8ae625d9a15ba2346a308a",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/01/45bdbab39a982547f0b643ed9d676ed2bc74bf": "18fcbef154b98f45c91df777ca38c4a7",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/03/fb5a21e96848954d16f8e26ca2b11587624169": "371053d017217d093673ab541e06b3e9",
".git/objects/06/d1b988613ecb46afc8a6a992cdfff48bfd57e6": "3b7ae9a05af41abf8426002387249ba1",
".git/objects/09/f51ecd59f3917e09ac2530597c59f0c753438c": "1e261bc7552d42655cdec2af43a2733d",
".git/objects/0a/2540e0e2cb0ae993d4aaaa0fa50298321ba9df": "f8f7c8f55819adc1d51c8a3927836660",
".git/objects/0d/374ebd08561b6384599164fe4977e32ace96e6": "68f41c74001d756e97d13fedc9fa9191",
".git/objects/0d/48f79c1e3067f973cf4724337b1e69a981becb": "e923d369047f5769a57fc067a0038118",
".git/objects/0d/4f6b81e1e4be9b66e6b19265729af9ab6e5c4d": "d2216679f08c0326c14ab6dbf676ba00",
".git/objects/0d/bee42cf8937ab6634527907b7224b6a280e896": "f18541cfbae4f0daf405489fc96e6d6b",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/0e/c2c56866f907283103fc79674b63237c33b7e2": "2063983d7f373ffe15e12632c665ca9c",
".git/objects/12/a66b99c26f980af7f693dec9698e5c3ddd8f27": "4743aa1220d94e4f436f21ff0511d090",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/13/c9f010fcc3d4974de976587b31e52b342b1772": "bda66dbd40e7bc58660df458e3f9958b",
".git/objects/14/982e5de40fd1471fccd5eb038f3b259089d168": "fccd2e4e60fd86d33c987666ef6e0975",
".git/objects/18/f76a2210b5c97552a4352322d602e4fe2ab004": "ab11537f616ddea75cd4908e01c4c2b7",
".git/objects/19/6c27b045d9cffc62f53120722ee623316eb212": "e6fa8db4eee3710e530bf46a89d46ccd",
".git/objects/1e/d2348fde0ec752675a6be332cdd4a2ffa10ebf": "cd4a6bdd413dbaef071a1a8f2bac5fc8",
".git/objects/1f/3ec3c248363b39aaeda97f20415c0a37048e59": "6425c6e0a6eec22eaf37475977a67800",
".git/objects/23/0413160233e2ff1271df295fe0462716fd674e": "dd7c1a76d99e335c6054ec6c5612ad6b",
".git/objects/23/67fde63b780dc5676883cb47dd902cc5d3b1a1": "49dc2ccff83634d7ed07afdb5910b455",
".git/objects/24/53e106f5e8e7079dd2ce62b533c0229308685f": "c7423b601b04fece59cf8fecd082b450",
".git/objects/26/840ce48f95ae318da4f0f4b2b37363123f1565": "98eaaf0a694d7c1d710a8b0217359b3e",
".git/objects/28/544f363d015a9e16557065e0b794e8ee48c064": "8481dd390cded43b9e1b6ee16030495a",
".git/objects/2b/daccaf4ec2fe435ed0122e55382cd95cc9caf1": "407f69bedb6f5e7548957f6f7fe80388",
".git/objects/2c/2f27ea7b2d28c746e60db989e9bed4f4389942": "54ad23131854a2abeacdfc21441f4f87",
".git/objects/2d/b89d2078c00e92d9cb4845cf76ddd005cc5ebe": "efd0db206a18e719876c51bdb0dfe5d4",
".git/objects/2e/543eee827228ca5265659349e9a8bab9589b4c": "97deb679984cd2c217cbcf9efb7edcf7",
".git/objects/2f/093825dd74f6fd871d27d8517864778f623c13": "3959ffcf0d7f30110a95e0ebaafa2c21",
".git/objects/2f/db290efff2813af5ccb65de53fb4fd3f239cbe": "0fa5d41da8d1ff3fbf7739110430cd42",
".git/objects/30/2a704bd17a853b7aac0e8be625c1f93e7e993e": "cdf42120f358b279fd85abd10a6b742f",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/39/21df640f4ed92cae6f63f142eef94847d61022": "7767cbbaee42bc65faee4703ba538507",
".git/objects/3d/1774783e81d5dff096fb57d69b530d21459f72": "3ff3f0c8e2da39e1c22e995b4216db71",
".git/objects/3d/5d91aa24bfc09728a380ef514b7efedf794613": "4566b4f091615f0eecd217b3823654f6",
".git/objects/3d/97c5af00a80a88fd6cf5e94fc7791f1a8655f4": "3ff91bed978dfa58678aa91b69bf2bab",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/3f/ef3d2e0c56c624aadf438c48da1de9dae14c8c": "29856bb749ac5df8bd8d1d2cf1dd0256",
".git/objects/42/9a33153bd8b480a5160d23c39607acc2d97b65": "80aa5b65b89de9bbd2954a2341c747bd",
".git/objects/46/8cd33b67c76646d5f6493aa250fd76eac3839e": "a4aa104b45bf3228ce9a47b993c62cf0",
".git/objects/4b/2b3d8001300b44fe566ec14e5b0d2ef3a4d942": "e7fde6ef18d2ba3176eabfa4aa89e471",
".git/objects/4c/22675e7651b7ce248749c18234692cf92bf2ba": "6ad99dc68e167e78f68cd283a631df7f",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/5f43da8c87b54580781c24c2f48329a9007676": "3e4e3862e65698cb8c82e8b034b52157",
".git/objects/4e/125c5286723f6d63e5bfcac7a0282a9657886b": "ea8211309d6369aa1e978365cb5074db",
".git/objects/4f/fe29f7fb4695623e532b5228998f2cc246e114": "a54b8537ce9a685a21fd1e7414dd0ee3",
".git/objects/52/377dbf56d9eace1494a7c4fc94195665eb114d": "0896b0442fea14bfabbbba74f621c8d3",
".git/objects/52/bb93c45c941817846d158e502f0613fbd2cbf3": "c7421cbe001c1dd8776091be84011195",
".git/objects/54/a95f7c361f2f6cf074e8b9bd0973f9a7c19f85": "116c606d496803e22aff2700a685c5d3",
".git/objects/55/86fe0ac672f7997014d814389c1d6c436d9d0c": "bf2b57e34cce384cd0741fc4352b77a4",
".git/objects/58/65f4069f40e915f82e19172eb2768473f37615": "81509025cb7d68f3200cf0cf1b25e9b0",
".git/objects/58/ae9eab8c57be860b9dea17628b646b64f5c41f": "34624d809a85ce37ad884e1463a9e4e2",
".git/objects/58/b4bc6acf23f912e1a0b9c102aeb71c39534cce": "9092fb45bb2fde230a3743d461f6f7d1",
".git/objects/58/f9e69e339888e48a3918386df628b0f321ac5c": "e80ca8a6a972a89ea51d37d2362d3ae8",
".git/objects/59/eaf19ecdffebf4df403b383eeaf9fb972eb8c0": "c3d346a1038974f98f82c03a023c4b67",
".git/objects/5e/199ec0e64d0a6560b0da93098df2466b66966c": "d3c4eaaac2d6e0fc841ce5ccd9083f67",
".git/objects/5e/4b3ce07b038b3cd54c3da8141e7de1f4b0fe5d": "51764ac3259e9995f504d8f1b3d52310",
".git/objects/61/18bc52a7858952eb75fae556c3acff7286f593": "af774ed8e970cbb9eee50a9fd064c051",
".git/objects/67/9c8f8a29d9c88d3c8a2bf9ccb746e92517defd": "8ae1d41b2d23e7399ebb9ea24a40d1fc",
".git/objects/67/ff94ad0c52af1e2aa13955459e5dd2923974fe": "233edc5f46d87fe6dae4f59c4b813a61",
".git/objects/68/3d3b2ccd9dc60ae599270c9e386ba425f937f9": "1fd826c3643a88e1bf0f8a289c8afc5a",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6f/bd0afba23aaa449e2aa93553ed416a99b2eb38": "4a37516fa51c81d615ae6735ebcdfc8d",
".git/objects/72/ab275a3c24e0ffa34f0ba2f7f5435b82b86289": "d762cf94006d87e9d2483aefa1c44636",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/78/cd9cb4c4a5ef6ee090ddf345072b1e8105c3c6": "c6e75f954c76dab086a746501f916513",
".git/objects/79/cbec3e0b7f5f095100b64839c7fa5a989b70b5": "b2b72dd9477837b77132ee86a8f8ec5e",
".git/objects/7b/5ffab296544094d733b3536002d89d6c498997": "fb66f433ed91b1f6e554492d6c590175",
".git/objects/7c/7f2e83377993c1a18ce18dd7765fcd831a1881": "daac5434cf343341adc4f924a216fb92",
".git/objects/7f/63352fcc708aa861dac2b4c1bacfe7b27934e5": "18725b30934cd6c649adbbcdf061e4b7",
".git/objects/80/b41254faaf41ebc6c8e2486f8ff38ee6c9f7ee": "b26551277f46ff4a3ac9dc4e10417905",
".git/objects/81/6284d09c10bf22e51865aa0ada1c8a93a4e88e": "7f8a7bada0b79faba8972f4fdd989d2b",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/eee58b139341a9bd806759487df3b7cb7b1ea3": "5e53b27fd1bbf5eb77265c41da76ce07",
".git/objects/84/cea8188640f50604845783cd2ea02db5871c08": "2ff5b8923af3f45d84e7016f7198b13f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/f5b19f8a12809a27a6b2bea6c5011c6b5f1950": "bbc4bdd51760f14f3bb00abb9bf8bb22",
".git/objects/8c/88a2041fc2543dfde8f72c6cf1054e7bca81fe": "dbffee92c8575ed2d1377aafc0867ee4",
".git/objects/8f/5bba8b75180bd9283df15dbe34e7e477a08638": "fd1d186509581c9812f66c20ec2acd9b",
".git/objects/90/8b14c50bff5a02cd819e525c573f791d727469": "aa44dc6d0eab800f66b8377ffc7254a7",
".git/objects/95/04edd7d6a40a55afc24b745d5ae3b3659fcbd8": "3df8b34b80421a95eb0d35fcb1f0f1ad",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/97/21f16d5b875fa48b1d015c1eb3231510bf9c07": "6bd6df391d85a924b3147d138f5e21f6",
".git/objects/97/ad9772471c9e9a22d03df417b947c63946607a": "1f4d9c5e4eae84fc2a7a1b48f6e991c2",
".git/objects/99/b60305cca71dd19ee10e2ef431a348d204d9cb": "9f6743d03514c6192c1db76ffee632b7",
".git/objects/99/cc0af3a903f28f98de0ce9b3e986b099147b49": "1456dda0a7901b869ace9d17f531d485",
".git/objects/9a/c49be4e81fac2d7b49f952830744dee2cee813": "694b7604d20ab9f1c00136deae341caa",
".git/objects/9b/b499946ec22a697fd182e9879ce54170b3d3b9": "98b40522cd9606e99b90e7c71e0f985a",
".git/objects/9c/3a39d299478a17ae47bf09128dc3405a6afa57": "92df1ab1478cd715e56cb12f6890699f",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a0/39ce62902d2c8ae0cbd4b84b95d58741d748f8": "c0e4a51a70a5f0eaa309f6512d1e20ab",
".git/objects/a1/1b06a488de2ca14362cdeced5f79ab9be0d561": "560a12c05731ce9b76b184be0366a480",
".git/objects/a2/2b861ba81f265620a6bf0d3533d7b536674b23": "1cd7b53beafbcc5bdcd6c2fbcbaa4904",
".git/objects/a3/6eda39365b5d52608242ec8e93310831fb0043": "0ec488f01f27e023d6b6c0fd7b787830",
".git/objects/a3/c1bb430c3b39f88f748a50137980ee8c4df378": "ab028c009ebb4415a2144f7341a4522c",
".git/objects/a6/3307079c2b9c82b2b530f4820d73876c884e1f": "a29f956809d7d21371fd97c22bda70e0",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ab/a4b6aef6fa56f2962d1d899804a676fc8d2104": "d1f530302cf482bdfdd7ef3d36970f11",
".git/objects/ac/6123ce6a4b2814e30e639f15bd6d2e5023bac5": "8d60cbd201442dc2eeac958d12e56c85",
".git/objects/ae/13b2faf92003831362526efbb69fe3d8bfc972": "e2db124fd9e0729f8046d772c4a2da61",
".git/objects/b3/7f8556df1dbbec6791473cff069313f6059594": "47fa21e3ee2a5ba1ee17dfad667a7bad",
".git/objects/b5/515c35a2df37e8446f8ff2ff73453334fb8cd7": "749f67c13391d50ea37b8b17aee8a512",
".git/objects/b5/70a7680939620166a14a302371f0a49decdcfc": "a53d0d75a0abd61e9cb822e198e26747",
".git/objects/b5/94d0c5f35bb40fc67bd2078614eba788e1850b": "7298bf08b074e8c5c69bd35635992bbe",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/b682a701b27fc59b9782c40cd565edb326803a": "d206da38f08f03291fb2c26edd8d03ae",
".git/objects/b9/e25073b3e75fae2952c1f8cae279e614e99b4a": "6da9e9c62b0474f19edef62c9a7bd6bc",
".git/objects/ba/b9ae4d2d04b5b27941fff2a6e983cf3125d1c0": "5124edbe6732268f7b2df4250566d280",
".git/objects/bb/7a0eb3edfe34ce8946ecc003fe79edfb683a7b": "aeb542bf10cc3e6bec5f43b1c97ecf0f",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/31969dc47eb936dfc05b33e0fcbb250a7d8136": "d5b00e339bfc263f8052a5d4e224f14d",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/be/67410fd0a5aaf22e118ff0dd3be2dcd441f34c": "6b6267f4eaa77a2f3de6d0252bfef1c8",
".git/objects/c4/521276184de0e96a1fc64ffba418642ccb0f06": "aba54d9ed4fec5c6373bd6b0bbd84069",
".git/objects/c5/88902159f83afb8a6f2e717020c91810be39ed": "90bc8afc2a6f2006bd4a3b302aebc5b4",
".git/objects/c6/e7877008468bbbb0b554e3b36e147d2e635c7f": "fdcabade36f305c929a4d4ca29b6d35d",
".git/objects/c9/5da6515090b392c96620175f0c2279a2d1178f": "ead22e23d26911988d09ea8f90f4003e",
".git/objects/ca/12fbbe81bf262d848ae578e6869e2b9ff98bdd": "bdf65c3c9b99c7695e279a65715281fd",
".git/objects/ca/6d8271b14373d4288181767a3b9eb93ea22a8f": "77649a6c3e86f714bf04be3d97166eab",
".git/objects/cb/004b1c777819b6cc978421ba641389121927ff": "f669d5f1cfe8c4b89b1e72606e55f9f6",
".git/objects/cb/0f9ceaf0240175d6edfe14f7b493a35964854a": "f0f649797f101e735071ccde24f6f217",
".git/objects/cb/adf28ff4ed684dd06051f8f69c7b6b1b268cd3": "2d699926593c3311967e62fc7286f8d4",
".git/objects/cd/8b7f295d39243859580c07e08bfb830fbf99d8": "2ca91112f1f3ca7184c9499d9da9d85f",
".git/objects/cd/ff82d75b415b1e90a98158ab291d2a8817a990": "80724792b559f94beae426560c4eb8e2",
".git/objects/ce/b3c6fac31fc399b59dc4f32b2720c50398575d": "dd45001d08b94dae281e696b7d218e9a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d5/cc2323253fc22b32c83c718000b513198d1fba": "e1c214ee3752bb027741fdceafb37106",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a58307b17bebf9a6c654de514eb721b742d4a6": "d289b154244e08c33a95aee1b974f477",
".git/objects/d9/c179eaa7951dffc9ebfb4f478436dec6110794": "b62009687d9fa08304bca10a17f9465f",
".git/objects/da/dbc7291946a8a4911460d32f22df0276da734b": "c0eb61fa5935bf3e3863704e5c09c9e8",
".git/objects/db/91512cab9ac987a3b3e7d7922f3eac8c7b78a7": "755f6fbdc0a9a862d6cc2efcb4a3ed6e",
".git/objects/de/ae25a32a5890efa930156a78d367d221889c3d": "67f71e2a3a198f41b7714c2f574750d9",
".git/objects/de/b7856ed67294392ffbc99c22b8168c33c35cff": "51ef02207f4045c8ce74c25a79bb25f2",
".git/objects/df/e7245ba9008a7e650dacfaf8f1ae439889e430": "0cb49a8697ff9c6547ea5c58d6598e05",
".git/objects/e0/0f0256b73d5f1df61eea20ab1b6b313f2dde44": "68c7768a31a289e5dad0df103119e0a5",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/ea/69e2a48e2ab7309a36b14b455b8f59530a5eeb": "74b2523064783687f95224ebe9662fc7",
".git/objects/ea/b0ccd9705dc8b164da7433c2a8fdd039fe9da6": "6634c90067eded64d9401f02dd9c648f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/04ecd2793ffff9ff2867257b3c65889aa42e9a": "ae97424b90b748dac8a5f9eee188c46f",
".git/objects/ec/1a9d5295cf53c2595afd00c045721352c9994e": "23ee91b44846f6369e88f6d40d2aeb21",
".git/objects/f1/81d07dd649ddcb4b3677a78e119cde5dc3779b": "945ead4970c063bb6e89905f643506ff",
".git/objects/f8/7cb68a574a42d16e499cb757d5434339609583": "44a3d1867625c2901a21f06fbcaae40d",
".git/objects/f9/7a5308917f3ef89aab1e9cffd9e4ad9710662d": "d286c3f061826a88ab84e0e67bf5de6b",
".git/objects/fa/8823e92f3b705edf58aef3c3611151ad450f18": "375be0d5ad4dab05fd88ba1882a5a113",
".git/objects/fc/44a41e784e64d042a82be6e4c4c56a21a8401e": "52b9fd78ab41da62bfaaed118afc176d",
".git/objects/fc/5ee92b165fc915e6c29d8bc83f439fe9ba2747": "b1fb7225c0e2a105100cc258c956aea4",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/710fcd958e3680d6287870b9b791cefb259d6c": "4a3cf5969b778938f8d8fecdf4018162",
".git/objects/fe/c4a88a477ee20620fbab26446b5fae8669b696": "b1be07b6127be3b7656c1082a4d74ab8",
".git/ORIG_HEAD": "587a709fff27aa631f55488e25ae56c7",
".git/refs/heads/master": "55c5c3970407d27647575dc3a2ad002e",
"assets/AssetManifest.bin": "afb71b1b7908b533b408cd8977a4652d",
"assets/AssetManifest.json": "b55612b23dea7c0f265630981c5f0a9c",
"assets/assets/animations/contact_anim.json": "d4c7340afca4034eb945ff44e05c7cde",
"assets/assets/animations/main_page_anim.json": "ada5cbbe628a7911c85048a2c162dd01",
"assets/assets/animations/single_mobile_app_anim.json": "7c461273c4c2ebb553e3be6a953735a3",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/3d_computer.png": "d0ef4f52df1e6aa1d0655e31670c3fca",
"assets/assets/images/3d_illustration.png": "3c156ad43d8dbb7621762a0b75617cae",
"assets/assets/images/academy.png": "1c2ad9602baa33e9d467140e874cda08",
"assets/assets/images/android_studio_icon.png": "88ed160d0224e293c6a4c4ca1a76c426",
"assets/assets/images/briefcase.png": "ae776bd7b2b1d6eb454a9cfabb0d95c5",
"assets/assets/images/chatwise.png": "7ec5b6a717edc03e13aa431299c51101",
"assets/assets/images/contact_illustration.svg": "07d8ff4aa2895e166d5d188721825ffe",
"assets/assets/images/css_logo.png": "b7eb4030946e94e375f674ee670a1c8b",
"assets/assets/images/daily_jounral_preview.png": "b0869719b07191aa2c7d466a144f492a",
"assets/assets/images/dart_icon.png": "6446d3024149e0ed1d46de86686cc38a",
"assets/assets/images/dashboard.png": "01243bcdcbcc72c270c19030eafe11bd",
"assets/assets/images/desi_art_room_pic.jpg": "e97f3b59c7ef9d2a7893dd72219b75c7",
"assets/assets/images/expense_manager_preview.png": "35ec57153270859a404cc6c20d3b0fa9",
"assets/assets/images/figma_logo.jpg": "b85b93e5ff0d2a8b1a322c1a9ba4fab0",
"assets/assets/images/firebase_logo.png": "c24b6b9c0fcd84c7b258879880472660",
"assets/assets/images/fiverr.png": "1e92c83913f819a0d6d573c9766e42fe",
"assets/assets/images/flutter_logo.png": "0dab7232a7f4d8d3a5ab56f870d3ae58",
"assets/assets/images/github.png": "f3b32b31be25ba1b50eb092530be56b5",
"assets/assets/images/google-play.png": "dc6d34239efe6e011b684db3a8376c9b",
"assets/assets/images/google.png": "baa58fbc1529cfdee811fd2cd6ad9a14",
"assets/assets/images/html_logo.png": "2dd76ac7cd918c601ae1e66f964df983",
"assets/assets/images/javascript_logo.png": "0cded3a3276425911d55a2552bf361bf",
"assets/assets/images/java_icon.png": "4eb1819dc863ef386e09d86e9f482a9f",
"assets/assets/images/jetpack_compose.png": "0185b491c2c275060d654b5b88b06abc",
"assets/assets/images/kotlin_Icon.png": "3f3182e761cf45dcd05a2e745f917ce4",
"assets/assets/images/krishak_seva_preview.png": "d74f8f685f386f2137b5f3d7187effe1",
"assets/assets/images/linkedin.png": "c047ede27721531a99efdf33b23e5cd2",
"assets/assets/images/logo.png": "9b395af300a53b1db1f930d09d32613c",
"assets/assets/images/mongo_db.png": "90a8f550f701319d63f55851a58dfb67",
"assets/assets/images/my_photo.jpeg": "6a39b84d937b178f6edb467f22daedec",
"assets/assets/images/node_logo.png": "bf6bdd7caa83e0cb664d280d3f4a3972",
"assets/assets/images/portfolio_logo.png": "9b395af300a53b1db1f930d09d32613c",
"assets/assets/images/react_js_logo.png": "76bded982908e31a1134f24193aa7c8d",
"assets/assets/images/socio_live_preview_img.png": "e8866a4114c64409ad385fc9984cb26d",
"assets/assets/images/youtube.png": "ec1efab49c24be248d8ee984df407508",
"assets/FontManifest.json": "f1da79d9a6b292a483b14ba311c81f25",
"assets/fonts/MaterialIcons-Regular.otf": "620f8b2f28f6adca439cf8b0c27bf5cd",
"assets/NOTICES": "1c83b8e0a48deadedef5e8b116ea1cc0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9aaa7ebae6cd10d6a7a9e6692135dfb5",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "9b395af300a53b1db1f930d09d32613c",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/img.png": "0e38f0d834ec2d6eb5d3ccecb4165d83",
"index.html": "9d4873f3485c942a5f995fb677c8138a",
"/": "9d4873f3485c942a5f995fb677c8138a",
"main.dart.js": "66f6d5fbdd1429016e1b85b6065a5ee1",
"manifest.json": "9583ebe54188295a4768ae1aa040030b",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
