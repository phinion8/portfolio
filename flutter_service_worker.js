'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "77d1f0b46b196c5a930777365a2e4cb7",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6bb74f69a814d593580a05fe7bcc3157",
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
".git/index": "c77c912ae4389478f497ed1323f1e494",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eed0c90f554fe702c34e0ca9ce602448",
".git/logs/refs/heads/master": "eed0c90f554fe702c34e0ca9ce602448",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/01/45bdbab39a982547f0b643ed9d676ed2bc74bf": "18fcbef154b98f45c91df777ca38c4a7",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/06/d1b988613ecb46afc8a6a992cdfff48bfd57e6": "3b7ae9a05af41abf8426002387249ba1",
".git/objects/09/f51ecd59f3917e09ac2530597c59f0c753438c": "1e261bc7552d42655cdec2af43a2733d",
".git/objects/0a/2540e0e2cb0ae993d4aaaa0fa50298321ba9df": "f8f7c8f55819adc1d51c8a3927836660",
".git/objects/0d/374ebd08561b6384599164fe4977e32ace96e6": "68f41c74001d756e97d13fedc9fa9191",
".git/objects/0d/48f79c1e3067f973cf4724337b1e69a981becb": "e923d369047f5769a57fc067a0038118",
".git/objects/0d/4f6b81e1e4be9b66e6b19265729af9ab6e5c4d": "d2216679f08c0326c14ab6dbf676ba00",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/12/a66b99c26f980af7f693dec9698e5c3ddd8f27": "4743aa1220d94e4f436f21ff0511d090",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/18/f76a2210b5c97552a4352322d602e4fe2ab004": "ab11537f616ddea75cd4908e01c4c2b7",
".git/objects/23/0413160233e2ff1271df295fe0462716fd674e": "dd7c1a76d99e335c6054ec6c5612ad6b",
".git/objects/26/840ce48f95ae318da4f0f4b2b37363123f1565": "98eaaf0a694d7c1d710a8b0217359b3e",
".git/objects/2b/daccaf4ec2fe435ed0122e55382cd95cc9caf1": "407f69bedb6f5e7548957f6f7fe80388",
".git/objects/2c/2f27ea7b2d28c746e60db989e9bed4f4389942": "54ad23131854a2abeacdfc21441f4f87",
".git/objects/2d/b89d2078c00e92d9cb4845cf76ddd005cc5ebe": "efd0db206a18e719876c51bdb0dfe5d4",
".git/objects/2e/543eee827228ca5265659349e9a8bab9589b4c": "97deb679984cd2c217cbcf9efb7edcf7",
".git/objects/2f/093825dd74f6fd871d27d8517864778f623c13": "3959ffcf0d7f30110a95e0ebaafa2c21",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3d/1774783e81d5dff096fb57d69b530d21459f72": "3ff3f0c8e2da39e1c22e995b4216db71",
".git/objects/3d/97c5af00a80a88fd6cf5e94fc7791f1a8655f4": "3ff91bed978dfa58678aa91b69bf2bab",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/42/9a33153bd8b480a5160d23c39607acc2d97b65": "80aa5b65b89de9bbd2954a2341c747bd",
".git/objects/4b/2b3d8001300b44fe566ec14e5b0d2ef3a4d942": "e7fde6ef18d2ba3176eabfa4aa89e471",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/5f43da8c87b54580781c24c2f48329a9007676": "3e4e3862e65698cb8c82e8b034b52157",
".git/objects/4f/fe29f7fb4695623e532b5228998f2cc246e114": "a54b8537ce9a685a21fd1e7414dd0ee3",
".git/objects/52/377dbf56d9eace1494a7c4fc94195665eb114d": "0896b0442fea14bfabbbba74f621c8d3",
".git/objects/52/bb93c45c941817846d158e502f0613fbd2cbf3": "c7421cbe001c1dd8776091be84011195",
".git/objects/54/a95f7c361f2f6cf074e8b9bd0973f9a7c19f85": "116c606d496803e22aff2700a685c5d3",
".git/objects/55/86fe0ac672f7997014d814389c1d6c436d9d0c": "bf2b57e34cce384cd0741fc4352b77a4",
".git/objects/58/65f4069f40e915f82e19172eb2768473f37615": "81509025cb7d68f3200cf0cf1b25e9b0",
".git/objects/58/f9e69e339888e48a3918386df628b0f321ac5c": "e80ca8a6a972a89ea51d37d2362d3ae8",
".git/objects/59/eaf19ecdffebf4df403b383eeaf9fb972eb8c0": "c3d346a1038974f98f82c03a023c4b67",
".git/objects/5e/199ec0e64d0a6560b0da93098df2466b66966c": "d3c4eaaac2d6e0fc841ce5ccd9083f67",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/72/ab275a3c24e0ffa34f0ba2f7f5435b82b86289": "d762cf94006d87e9d2483aefa1c44636",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/7b/5ffab296544094d733b3536002d89d6c498997": "fb66f433ed91b1f6e554492d6c590175",
".git/objects/7c/7f2e83377993c1a18ce18dd7765fcd831a1881": "daac5434cf343341adc4f924a216fb92",
".git/objects/80/b41254faaf41ebc6c8e2486f8ff38ee6c9f7ee": "b26551277f46ff4a3ac9dc4e10417905",
".git/objects/81/6284d09c10bf22e51865aa0ada1c8a93a4e88e": "7f8a7bada0b79faba8972f4fdd989d2b",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/84/cea8188640f50604845783cd2ea02db5871c08": "2ff5b8923af3f45d84e7016f7198b13f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/97/21f16d5b875fa48b1d015c1eb3231510bf9c07": "6bd6df391d85a924b3147d138f5e21f6",
".git/objects/97/ad9772471c9e9a22d03df417b947c63946607a": "1f4d9c5e4eae84fc2a7a1b48f6e991c2",
".git/objects/9a/c49be4e81fac2d7b49f952830744dee2cee813": "694b7604d20ab9f1c00136deae341caa",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a0/39ce62902d2c8ae0cbd4b84b95d58741d748f8": "c0e4a51a70a5f0eaa309f6512d1e20ab",
".git/objects/a1/1b06a488de2ca14362cdeced5f79ab9be0d561": "560a12c05731ce9b76b184be0366a480",
".git/objects/a2/2b861ba81f265620a6bf0d3533d7b536674b23": "1cd7b53beafbcc5bdcd6c2fbcbaa4904",
".git/objects/a3/6eda39365b5d52608242ec8e93310831fb0043": "0ec488f01f27e023d6b6c0fd7b787830",
".git/objects/a3/c1bb430c3b39f88f748a50137980ee8c4df378": "ab028c009ebb4415a2144f7341a4522c",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ab/a4b6aef6fa56f2962d1d899804a676fc8d2104": "d1f530302cf482bdfdd7ef3d36970f11",
".git/objects/b3/7f8556df1dbbec6791473cff069313f6059594": "47fa21e3ee2a5ba1ee17dfad667a7bad",
".git/objects/b5/515c35a2df37e8446f8ff2ff73453334fb8cd7": "749f67c13391d50ea37b8b17aee8a512",
".git/objects/b5/70a7680939620166a14a302371f0a49decdcfc": "a53d0d75a0abd61e9cb822e198e26747",
".git/objects/b5/94d0c5f35bb40fc67bd2078614eba788e1850b": "7298bf08b074e8c5c69bd35635992bbe",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/b682a701b27fc59b9782c40cd565edb326803a": "d206da38f08f03291fb2c26edd8d03ae",
".git/objects/b9/e25073b3e75fae2952c1f8cae279e614e99b4a": "6da9e9c62b0474f19edef62c9a7bd6bc",
".git/objects/bb/7a0eb3edfe34ce8946ecc003fe79edfb683a7b": "aeb542bf10cc3e6bec5f43b1c97ecf0f",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/be/67410fd0a5aaf22e118ff0dd3be2dcd441f34c": "6b6267f4eaa77a2f3de6d0252bfef1c8",
".git/objects/c4/521276184de0e96a1fc64ffba418642ccb0f06": "aba54d9ed4fec5c6373bd6b0bbd84069",
".git/objects/c9/5da6515090b392c96620175f0c2279a2d1178f": "ead22e23d26911988d09ea8f90f4003e",
".git/objects/ca/6d8271b14373d4288181767a3b9eb93ea22a8f": "77649a6c3e86f714bf04be3d97166eab",
".git/objects/cb/0f9ceaf0240175d6edfe14f7b493a35964854a": "f0f649797f101e735071ccde24f6f217",
".git/objects/cb/adf28ff4ed684dd06051f8f69c7b6b1b268cd3": "2d699926593c3311967e62fc7286f8d4",
".git/objects/ce/b3c6fac31fc399b59dc4f32b2720c50398575d": "dd45001d08b94dae281e696b7d218e9a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d5/cc2323253fc22b32c83c718000b513198d1fba": "e1c214ee3752bb027741fdceafb37106",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a58307b17bebf9a6c654de514eb721b742d4a6": "d289b154244e08c33a95aee1b974f477",
".git/objects/da/dbc7291946a8a4911460d32f22df0276da734b": "c0eb61fa5935bf3e3863704e5c09c9e8",
".git/objects/db/91512cab9ac987a3b3e7d7922f3eac8c7b78a7": "755f6fbdc0a9a862d6cc2efcb4a3ed6e",
".git/objects/df/e7245ba9008a7e650dacfaf8f1ae439889e430": "0cb49a8697ff9c6547ea5c58d6598e05",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/ea/69e2a48e2ab7309a36b14b455b8f59530a5eeb": "74b2523064783687f95224ebe9662fc7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/1a9d5295cf53c2595afd00c045721352c9994e": "23ee91b44846f6369e88f6d40d2aeb21",
".git/objects/f8/7cb68a574a42d16e499cb757d5434339609583": "44a3d1867625c2901a21f06fbcaae40d",
".git/objects/f9/7a5308917f3ef89aab1e9cffd9e4ad9710662d": "d286c3f061826a88ab84e0e67bf5de6b",
".git/objects/fc/44a41e784e64d042a82be6e4c4c56a21a8401e": "52b9fd78ab41da62bfaaed118afc176d",
".git/objects/fc/5ee92b165fc915e6c29d8bc83f439fe9ba2747": "b1fb7225c0e2a105100cc258c956aea4",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/710fcd958e3680d6287870b9b791cefb259d6c": "4a3cf5969b778938f8d8fecdf4018162",
".git/ORIG_HEAD": "c0264700c5f231bd2ffc81f699317072",
".git/refs/heads/master": "2f9177e85a87baa4de27f310d29d7833",
"assets/AssetManifest.bin": "7db3810f2d2b906beca9d0fa5f9c6a8b",
"assets/AssetManifest.json": "0d03a2bd81d768d4f9bec837d3f74d7f",
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
"assets/assets/images/android_studio_icon.png": "88ed160d0224e293c6a4c4ca1a76c426",
"assets/assets/images/briefcase.png": "ae776bd7b2b1d6eb454a9cfabb0d95c5",
"assets/assets/images/contact_illustration.svg": "07d8ff4aa2895e166d5d188721825ffe",
"assets/assets/images/css_logo.png": "b7eb4030946e94e375f674ee670a1c8b",
"assets/assets/images/dart_icon.png": "6446d3024149e0ed1d46de86686cc38a",
"assets/assets/images/dashboard.png": "01243bcdcbcc72c270c19030eafe11bd",
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
"assets/assets/images/kotlin_Icon.png": "3f3182e761cf45dcd05a2e745f917ce4",
"assets/assets/images/linkedin.png": "c047ede27721531a99efdf33b23e5cd2",
"assets/assets/images/logo.png": "9b395af300a53b1db1f930d09d32613c",
"assets/assets/images/mongo_db.png": "90a8f550f701319d63f55851a58dfb67",
"assets/assets/images/my_photo.jpeg": "6a39b84d937b178f6edb467f22daedec",
"assets/assets/images/node_logo.png": "bf6bdd7caa83e0cb664d280d3f4a3972",
"assets/assets/images/portfolio_logo.png": "9b395af300a53b1db1f930d09d32613c",
"assets/assets/images/react_js_logo.png": "76bded982908e31a1134f24193aa7c8d",
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
"index.html": "33cb29b67c9b7bf005c2108ed77d5585",
"/": "33cb29b67c9b7bf005c2108ed77d5585",
"main.dart.js": "20bc43bcdc7cb953452e8f169a5836d0",
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
