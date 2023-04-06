"use strict";

var _iyzipay = _interopRequireDefault(require("iyzipay"));
var Cards = _interopRequireWildcard(require("./methods/cards"));
var Installments = _interopRequireWildcard(require("./methods/installments"));
var Payments = _interopRequireWildcard(require("./methods/payments"));
var PaymentsThreeDS = _interopRequireWildcard(require("./methods/threeds-payments"));
var Checkouts = _interopRequireWildcard(require("./methods/checkouts"));
var CancelPayments = _interopRequireWildcard(require("./methods/cancel-payments"));
var RefundPayments = _interopRequireWildcard(require("./methods/refund-payments"));
var _nanoid = _interopRequireDefault(require("../../utils/nanoid"));
var Logs = _interopRequireWildcard(require("../../utils/logs"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*-----------------------------------------------*/
/* a) CARDS */
/*-----------------------------------------------*/

//Bir kullanıcı ve kart oluştur
const createUserAndCards = () => {
  Cards.createUserCard({
    locale: _iyzipay.default.LOCALE.TR /* iyzico istek sonucunda dönen metinlerin dilini ayarlamak için kullanılır */,
    conversationId: (0, _nanoid.default)() /* istek ve cevap eşleşmesi yapılması için kullanılabilecek ID */,
    email: "test@email.com" /* kart sahibinin e posta hesabı - zorunlu */,
    externalId: (0, _nanoid.default)() /* sakladığımız karta bizim verdiğimiz ID */,
    card: {
      cardAlias: "Kredi Kartım" /* * karta verilen isim - Kullanıcı tarafından belirlenir */,
      cardHolderName: "John Doe" /* * kartta yazan isim */,
      cardNumber: "5528790000000008" /* * kart numarası */,
      expireMonth: "12" /* * kartın son kullanma tarihinin ay bölümü */,
      expireYear: "2030" /* * kartın son kullanma tarihinin yıl bölümü */
    }
  }).then(result => {
    console.log(result);
    Logs.logFile("1-cards-kullanıcı-ve-kart-oluştur", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("1-cards-kullanıcı-ve-kart-hata", err);
  });
};

//Mevcut kullanıcıya yeni bir kart ekle
//Kullanıcının cardUserKey'ini kullanarak o kullanıcıya yeni kart ekliyoruz
const createACardForUser = () => {
  Cards.createUserCard({
    locale: _iyzipay.default.LOCALE.TR /* iyzico istek sonucunda dönen metinlerin dilini ayarlamak için kullanılır */,
    conversationId: (0, _nanoid.default)() /* istek ve cevap eşleşmesi yapılması için kullanılabilecek ID */,
    email: "test@email.com" /* kart sahibinin e posta hesabı - zorunlu */,
    externalId: (0, _nanoid.default)() /* sakladığımız karta bizim verdiğimiz ID */,
    cardUserKey: "AQGKCQnEbgYgMEzLxW0BUvXx5gM=" /* Kullanıcının cardUserKey'ini kullanarak o kullanıcıya yeni kart ekliyoruz */,
    card: {
      cardAlias: "Kredi Kartım" /* * karta verilen isim - Kullanıcı tarafından belirlenir */,
      cardHolderName: "John Doe" /* * kartta yazan isim */,
      cardNumber: "5528790000000008" /* * kart numarası */,
      expireMonth: "12" /* * kartın son kullanma tarihinin ay bölümü */,
      expireYear: "2030" /* * kartın son kullanma tarihinin yıl bölümü */
    }
  }).then(result => {
    console.log(result);
    Logs.logFile("2-cards-bir-kullanıcıya-kart-ekle", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("2-cards-bir-kullanıcıya-kart-hata", err);
  });
};

//Bir kullanıcının kartlarını oku
//cardUserKey ile kullanıcının mevcut kartlarını alıyoruz
const readCardForUser = () => {
  Cards.getUserCard({
    locale: _iyzipay.default.LOCALE.TR /* iyzico istek sonucunda dönen metinlerin dilini ayarlamak için kullanılır */,
    conversationId: (0, _nanoid.default)() /* istek ve cevap eşleşmesi yapılması için kullanılabilecek ID */,
    cardUserKey: "AQGKCQnEbgYgMEzLxW0BUvXx5gM=" /* Kullanıcının cardUserKey'ini kullanarak o kullanıcıya yeni kart ekliyoruz */
  }).then(result => {
    console.log(result);
    Logs.logFile("3-cards-bir-kullanıcıya-kartlarını-oku", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("3-cards-bir-kullanıcıya-kartlarını-oku-hata", err);
  });
};

//Bir kullanıcının kartlarını sil
const deleteCardForUser = () => {
  Cards.deleteUserCard({
    locale: _iyzipay.default.LOCALE.TR /* iyzico istek sonucunda dönen metinlerin dilini ayarlamak için kullanılır */,
    conversationId: (0, _nanoid.default)() /* istek ve cevap eşleşmesi yapılması için kullanılabilecek ID */,
    cardUserKey: "AQGKCQnEbgYgMEzLxW0BUvXx5gM=" /* Kullanıcının cardUserKey'ini kullanarak o kullanıcıya yeni kart ekliyoruz */,
    cardToken: "/4H1PbFcKI1TZTs6ihYBVgiNXpU=" /* Kartın cardToken'ini kullanarak o kartı siliyoruz */
  }).then(result => {
    console.log(result);
    Logs.logFile("4-cards-bir-kullanının-kartlarını-sil", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("4-cards-bir-kullanının-kartlarını-sil-hata", err);
  });
};

/*-----------------------------------------------*/
/* b) INSTALLMENTS */
/*-----------------------------------------------*/

//Bir kart ve ücretle gerçekleşebilecek taksitlerin kontrolu
const checkInstallments = () => {
  return Installments.checkInstallment({
    locale: _iyzipay.default.LOCALE.TR,
    conversationId: (0, _nanoid.default)(),
    binNumber: "55287900",
    price: "1000" //Harcama tutarı
  }).then(result => {
    console.log(result);
    Logs.logFile("5-Installments-kart-ve-ucret-taksit-kontrolu", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("5-Installments-kart-ve-ucret-taksit-kontrolu-hata", err);
  });
};

/*-----------------------------------------------*/
/* c) NORMAL PAYMENTS */
/*-----------------------------------------------*/

//Kayıtlı olmayan kartla ödeme  yapma ve kartı kaydetmeden devam et
const createPayment = () => {
  return Payments.createPayment({
    locale: _iyzipay.default.LOCALE.TR,
    /* iyzico istek sonucunda dönen metinlerin dilini ayarlamak için kullanılır */
    conversationId: '123456789',
    /* istek ve cevap eşleşmesi yapılması için kullanılabilecek ID */
    price: '300',
    /* Sepetteki ürünlerin her birisinin kırılımlarının toplamıdır. */
    paidPrice: '300',
    /* Tüm vade farkı vb hesaplanmış POS'tan çekilecek tutardır */
    currency: _iyzipay.default.CURRENCY.TRY,
    /* Para birimidir. Kurlar için Iyzico'dam özel izin gerektirecektir */
    installment: '1',
    /* Taksit bilgisidir. Tek çekim için 1 olmalıdır (1, 2, 3, 6, 9, 12) */
    basketId: 'B67832',
    /* Sepetin ID'sidir. Ödeme ID'si olarak tanımlanabilir */
    paymentChannel: _iyzipay.default.PAYMENT_CHANNEL.WEB,
    /* Ödemenin hangi platformdan yapıldığını belirtir. */
    paymentGroup: _iyzipay.default.PAYMENT_GROUP.PRODUCT,
    /* Ödeme grubu, varsayılan PRODUCT */
    paymentCard: {
      cardHolderName: 'John Doe',
      /* Kart sahibinin adı */
      cardNumber: '5528790000000008',
      /* Kart numarası */
      expireMonth: '12',
      /* Kartın son kullanma tarihi ay bilgisi */
      expireYear: '2030',
      /* Kartın son kullanma tarihi yıl bilgisi */
      cvc: '123',
      /* Kartın cvc bilgisi */
      registerCard: '0' /* Ödeme esnasında kartın kaydedilip kaydedilmeyeceğini belirleyen parametre. Varsayılan değeri 0 olup, geçerli değerler 0 ve 1’dir. */
    },

    buyer: {
      id: 'BY789',
      /* Kullanıcının üst sistemdeki ID numarası */
      name: 'John',
      /* Kullanıcının adı */
      surname: 'Doe',
      /* Kullanıcın soyadı */
      gsmNumber: '+905350000000',
      /* Kullanıcının telefon numarası */
      email: 'email@email.com',
      /* Kullanıcının e-posta adresi */
      identityNumber: '00000000000',
      /* Kullanıcının kimlik numarası / eğer yoksa 11 tane 0 girilebilir */
      lastLoginDate: '2015-10-05 12:43:35',
      /* En son giriş tarihi */
      registrationDate: '2013-04-21 15:12:09',
      /* Kayıt tarihi */
      registrationAddress: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Kullanıcının kayıt adresi */
      ip: '85.34.78.112',
      /* Kullanıcının IP adresi */
      city: 'Istanbul',
      /* Kullanıcının şehri */
      country: 'Turkey',
      /* Kullanıcının ülkesi */
      zipCode: '34732' /* Kullanıcının posta kodu */
    },

    shippingAddress: {
      contactName: 'Jane Doe',
      /* Teslimat için Kullanıcının Adı */
      city: 'Istanbul',
      /* Teslimat için Kullanıcının Şehri */
      country: 'Turkey',
      /* Teslimat için Kullanıcının Ülkesi */
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Teslimat için Kullanıcının Şehri */
      zipCode: '34742' /* Teslimat için Kullanıcının Posta Kodu */
    },

    billingAddress: {
      contactName: 'Jane Doe',
      /* Fatura için Kullanıcının Adı */
      city: 'Istanbul',
      /* Fatura için Kullanıcının Şehri */
      country: 'Turkey',
      /* Fatura için Kullanıcının Ülkesi */
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Fatura için Kullanıcının Adresi */
      zipCode: '34742' /* Fatura için Kullanıcının Posta Kodu */
    },

    basketItems: [{
      id: 'BI101',
      /* Sepet ürününün ID'si */
      name: 'Binocular',
      /* Sepet ürününün adı */
      category1: 'Collectibles',
      /* Sepet ürününün ilk kategorisi */
      category2: 'Accessories',
      /* Sepet ürününün ikinci kategorisi */
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      /* Sepet ürününün tipi */
      price: '150' /* Sepet ürününün toplam fiyattaki kırılımı */
    }, {
      id: 'BI102',
      name: 'Game code',
      category1: 'Game',
      category2: 'Online Game Items',
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.VIRTUAL,
      price: '90'
    }, {
      id: 'BI103',
      name: 'Usb',
      category1: 'Electronics',
      category2: 'Usb / Cable',
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      price: '60'
    }]
  }).then(result => {
    console.log(result);
    Logs.logFile("6-payments-yeni-bir-kartla-odeme-alma-ve-kartı-kaydetme", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("6-payments-yeni-bir-kartla-odeme-alma-ve-kartı-kaydetme-hata", err);
  });
};

//Kayıtlı olmayan kartla ödeme  yapma ve kartı kaydet
const createPaymentAndSaveCard = () => {
  return Payments.createPayment({
    locale: _iyzipay.default.LOCALE.TR,
    /* iyzico istek sonucunda dönen metinlerin dilini ayarlamak için kullanılır */
    conversationId: '123456789',
    /* istek ve cevap eşleşmesi yapılması için kullanılabilecek ID */
    price: '300',
    /* Sepetteki ürünlerin her birisinin kırılımlarının toplamıdır. */
    paidPrice: '300',
    /* Tüm vade farkı vb hesaplanmış POS'tan çekilecek tutardır */
    currency: _iyzipay.default.CURRENCY.TRY,
    /* Para birimidir. Kurlar için Iyzico'dam özel izin gerektirecektir */
    installment: '1',
    /* Taksit bilgisidir. Tek çekim için 1 olmalıdır (1, 2, 3, 6, 9, 12) */
    basketId: 'B67832',
    /* Sepetin ID'sidir. Ödeme ID'si olarak tanımlanabilir */
    paymentChannel: _iyzipay.default.PAYMENT_CHANNEL.WEB,
    /* Ödemenin hangi platformdan yapıldığını belirtir. */
    paymentGroup: _iyzipay.default.PAYMENT_GROUP.PRODUCT,
    /* Ödeme grubu, varsayılan PRODUCT */
    paymentCard: {
      cardUserKey: "AQGKCQnEbgYgMEzLxW0BUvXx5gM=",
      cardAlias: "Kredi Kartım Ödemeden Sonra",
      cardHolderName: 'John Doe',
      /* Kart sahibinin adı */
      cardNumber: '5528790000000008',
      /* Kart numarası */
      expireMonth: '12',
      /* Kartın son kullanma tarihi ay bilgisi */
      expireYear: '2030',
      /* Kartın son kullanma tarihi yıl bilgisi */
      cvc: '123',
      /* Kartın cvc bilgisi */
      registerCard: '1' /* Ödeme esnasında kartın kaydedilip kaydedilmeyeceğini belirleyen parametre. Varsayılan değeri 0 olup, geçerli değerler 0 ve 1’dir. */
    },

    buyer: {
      id: 'BY789',
      /* Kullanıcının üst sistemdeki ID numarası */
      name: 'John',
      /* Kullanıcının adı */
      surname: 'Doe',
      /* Kullanıcın soyadı */
      gsmNumber: '+905350000000',
      /* Kullanıcının telefon numarası */
      email: 'email@email.com',
      /* Kullanıcının e-posta adresi */
      identityNumber: '00000000000',
      /* Kullanıcının kimlik numarası / eğer yoksa 11 tane 0 girilebilir */
      lastLoginDate: '2015-10-05 12:43:35',
      /* En son giriş tarihi */
      registrationDate: '2013-04-21 15:12:09',
      /* Kayıt tarihi */
      registrationAddress: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Kullanıcının kayıt adresi */
      ip: '85.34.78.112',
      /* Kullanıcının IP adresi */
      city: 'Istanbul',
      /* Kullanıcının şehri */
      country: 'Turkey',
      /* Kullanıcının ülkesi */
      zipCode: '34732' /* Kullanıcının posta kodu */
    },

    shippingAddress: {
      contactName: 'Jane Doe',
      /* Teslimat için Kullanıcının Adı */
      city: 'Istanbul',
      /* Teslimat için Kullanıcının Şehri */
      country: 'Turkey',
      /* Teslimat için Kullanıcının Ülkesi */
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Teslimat için Kullanıcının Şehri */
      zipCode: '34742' /* Teslimat için Kullanıcının Posta Kodu */
    },

    billingAddress: {
      contactName: 'Jane Doe',
      /* Fatura için Kullanıcının Adı */
      city: 'Istanbul',
      /* Fatura için Kullanıcının Şehri */
      country: 'Turkey',
      /* Fatura için Kullanıcının Ülkesi */
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Fatura için Kullanıcının Adresi */
      zipCode: '34742' /* Fatura için Kullanıcının Posta Kodu */
    },

    basketItems: [{
      id: 'BI101',
      /* Sepet ürününün ID'si */
      name: 'Binocular',
      /* Sepet ürününün adı */
      category1: 'Collectibles',
      /* Sepet ürününün ilk kategorisi */
      category2: 'Accessories',
      /* Sepet ürününün ikinci kategorisi */
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      /* Sepet ürününün tipi */
      price: '150' /* Sepet ürününün toplam fiyattaki kırılımı */
    }, {
      id: 'BI102',
      name: 'Game code',
      category1: 'Game',
      category2: 'Online Game Items',
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.VIRTUAL,
      price: '90'
    }, {
      id: 'BI103',
      name: 'Usb',
      category1: 'Electronics',
      category2: 'Usb / Cable',
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      price: '60'
    }]
  }).then(result => {
    console.log(result);
    Logs.logFile("7-payments-yeni-bir-kartla-odeme-alma-ve-kartı-kaydet", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("7-payments-yeni-bir-kartla-odeme-alma-ve-kartı-kaydet-hata", err);
  });
};

//Kaydedilmiş bir kart ile ödeme yap
const createPaymentWithSavedCard = () => {
  return Payments.createPayment({
    locale: _iyzipay.default.LOCALE.TR,
    /* iyzico istek sonucunda dönen metinlerin dilini ayarlamak için kullanılır */
    conversationId: '123456789',
    /* istek ve cevap eşleşmesi yapılması için kullanılabilecek ID */
    price: '300',
    /* Sepetteki ürünlerin her birisinin kırılımlarının toplamıdır. */
    paidPrice: '300',
    /* Tüm vade farkı vb hesaplanmış POS'tan çekilecek tutardır */
    currency: _iyzipay.default.CURRENCY.TRY,
    /* Para birimidir. Kurlar için Iyzico'dam özel izin gerektirecektir */
    installment: '1',
    /* Taksit bilgisidir. Tek çekim için 1 olmalıdır (1, 2, 3, 6, 9, 12) */
    basketId: 'B67832',
    /* Sepetin ID'sidir. Ödeme ID'si olarak tanımlanabilir */
    paymentChannel: _iyzipay.default.PAYMENT_CHANNEL.WEB,
    /* Ödemenin hangi platformdan yapıldığını belirtir. */
    paymentGroup: _iyzipay.default.PAYMENT_GROUP.PRODUCT,
    /* Ödeme grubu, varsayılan PRODUCT */
    paymentCard: {
      cardUserKey: "AQGKCQnEbgYgMEzLxW0BUvXx5gM=",
      cardToken: "U45kI8W5spZ5jGV2CmTy8TecTWc="
    },
    buyer: {
      id: 'BY789',
      /* Kullanıcının üst sistemdeki ID numarası */
      name: 'John',
      /* Kullanıcının adı */
      surname: 'Doe',
      /* Kullanıcın soyadı */
      gsmNumber: '+905350000000',
      /* Kullanıcının telefon numarası */
      email: 'email@email.com',
      /* Kullanıcının e-posta adresi */
      identityNumber: '00000000000',
      /* Kullanıcının kimlik numarası / eğer yoksa 11 tane 0 girilebilir */
      lastLoginDate: '2015-10-05 12:43:35',
      /* En son giriş tarihi */
      registrationDate: '2013-04-21 15:12:09',
      /* Kayıt tarihi */
      registrationAddress: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Kullanıcının kayıt adresi */
      ip: '85.34.78.112',
      /* Kullanıcının IP adresi */
      city: 'Istanbul',
      /* Kullanıcının şehri */
      country: 'Turkey',
      /* Kullanıcının ülkesi */
      zipCode: '34732' /* Kullanıcının posta kodu */
    },

    shippingAddress: {
      contactName: 'Jane Doe',
      /* Teslimat için Kullanıcının Adı */
      city: 'Istanbul',
      /* Teslimat için Kullanıcının Şehri */
      country: 'Turkey',
      /* Teslimat için Kullanıcının Ülkesi */
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Teslimat için Kullanıcının Şehri */
      zipCode: '34742' /* Teslimat için Kullanıcının Posta Kodu */
    },

    billingAddress: {
      contactName: 'Jane Doe',
      /* Fatura için Kullanıcının Adı */
      city: 'Istanbul',
      /* Fatura için Kullanıcının Şehri */
      country: 'Turkey',
      /* Fatura için Kullanıcının Ülkesi */
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Fatura için Kullanıcının Adresi */
      zipCode: '34742' /* Fatura için Kullanıcının Posta Kodu */
    },

    basketItems: [{
      id: 'BI101',
      /* Sepet ürününün ID'si */
      name: 'Binocular',
      /* Sepet ürününün adı */
      category1: 'Collectibles',
      /* Sepet ürününün ilk kategorisi */
      category2: 'Accessories',
      /* Sepet ürününün ikinci kategorisi */
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      /* Sepet ürününün tipi */
      price: '150' /* Sepet ürününün toplam fiyattaki kırılımı */
    }, {
      id: 'BI102',
      name: 'Game code',
      category1: 'Game',
      category2: 'Online Game Items',
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.VIRTUAL,
      price: '90'
    }, {
      id: 'BI103',
      name: 'Usb',
      category1: 'Electronics',
      category2: 'Usb / Cable',
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      price: '60'
    }]
  }).then(result => {
    console.log(result);
    Logs.logFile("8-payments-kayitli-bir-kartla-odeme-al", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("8-payments-kayitli-bir-kartla-odeme-al-hata", err);
  });
};

/*-----------------------------------------------*/
/* d) 3D SECURE PAYMENTS */
/*-----------------------------------------------*/
//ödeme başladı
//banka üzerinden kullanıcıya sms dogrulaması gönderildi
//onay durumunda api url'imize istek yapılır
//ödeme tamamlanır
const initializeThreeDSPayments = () => {
  PaymentsThreeDS.initializePayment({
    locale: _iyzipay.default.LOCALE.TR,
    /* iyzico istek sonucunda dönen metinlerin dilini ayarlamak için kullanılır */
    conversationId: '123456789',
    /* istek ve cevap eşleşmesi yapılması için kullanılabilecek ID */
    price: '300',
    /* Sepetteki ürünlerin her birisinin kırılımlarının toplamıdır. */
    paidPrice: '300',
    /* Tüm vade farkı vb hesaplanmış POS'tan çekilecek tutardır */
    currency: _iyzipay.default.CURRENCY.TRY,
    /* Para birimidir. Kurlar için Iyzico'dam özel izin gerektirecektir */
    installment: '1',
    /* Taksit bilgisidir. Tek çekim için 1 olmalıdır (1, 2, 3, 6, 9, 12) */
    basketId: 'B67832',
    /* Sepetin ID'sidir. Ödeme ID'si olarak tanımlanabilir */
    paymentChannel: _iyzipay.default.PAYMENT_CHANNEL.WEB,
    /* Ödemenin hangi platformdan yapıldığını belirtir. */
    paymentGroup: _iyzipay.default.PAYMENT_GROUP.PRODUCT,
    /* Ödeme grubu, varsayılan PRODUCT */
    callbackUrl: 'https://localhost/api/payment/3ds/complete',
    /* Ödeme tamamlandığında çağrılacak URL */
    paymentCard: {
      cardHolderName: 'John Doe',
      /* Kart sahibinin adı */
      cardNumber: '5528790000000008',
      /* Kart numarası */
      expireMonth: '12',
      /* Kartın son kullanma tarihi ay bilgisi */
      expireYear: '2030',
      /* Kartın son kullanma tarihi yıl bilgisi */
      cvc: '123',
      /* Kartın cvc bilgisi */
      registerCard: '0' /* Ödeme esnasında kartın kaydedilip kaydedilmeyeceğini belirleyen parametre. Varsayılan değeri 0 olup, geçerli değerler 0 ve 1’dir. */
    },

    buyer: {
      id: 'BY789',
      /* Kullanıcının üst sistemdeki ID numarası */
      name: 'John',
      /* Kullanıcının adı */
      surname: 'Doe',
      /* Kullanıcın soyadı */
      gsmNumber: '+905350000000',
      /* Kullanıcının telefon numarası */
      email: 'email@email.com',
      /* Kullanıcının e-posta adresi */
      identityNumber: '00000000000',
      /* Kullanıcının kimlik numarası / eğer yoksa 11 tane 0 girilebilir */
      lastLoginDate: '2015-10-05 12:43:35',
      /* En son giriş tarihi */
      registrationDate: '2013-04-21 15:12:09',
      /* Kayıt tarihi */
      registrationAddress: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Kullanıcının kayıt adresi */
      ip: '85.34.78.112',
      /* Kullanıcının IP adresi */
      city: 'Istanbul',
      /* Kullanıcının şehri */
      country: 'Turkey',
      /* Kullanıcının ülkesi */
      zipCode: '34732' /* Kullanıcının posta kodu */
    },

    shippingAddress: {
      contactName: 'Jane Doe',
      /* Teslimat için Kullanıcının Adı */
      city: 'Istanbul',
      /* Teslimat için Kullanıcının Şehri */
      country: 'Turkey',
      /* Teslimat için Kullanıcının Ülkesi */
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Teslimat için Kullanıcının Şehri */
      zipCode: '34742' /* Teslimat için Kullanıcının Posta Kodu */
    },

    billingAddress: {
      contactName: 'Jane Doe',
      /* Fatura için Kullanıcının Adı */
      city: 'Istanbul',
      /* Fatura için Kullanıcının Şehri */
      country: 'Turkey',
      /* Fatura için Kullanıcının Ülkesi */
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Fatura için Kullanıcının Adresi */
      zipCode: '34742' /* Fatura için Kullanıcının Posta Kodu */
    },

    basketItems: [{
      id: 'BI101',
      /* Sepet ürününün ID'si */
      name: 'Binocular',
      /* Sepet ürününün adı */
      category1: 'Collectibles',
      /* Sepet ürününün ilk kategorisi */
      category2: 'Accessories',
      /* Sepet ürününün ikinci kategorisi */
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      /* Sepet ürününün tipi */
      price: '150' /* Sepet ürününün toplam fiyattaki kırılımı */
    }, {
      id: 'BI102',
      name: 'Game code',
      category1: 'Game',
      category2: 'Online Game Items',
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.VIRTUAL,
      price: '90'
    }, {
      id: 'BI103',
      name: 'Usb',
      category1: 'Electronics',
      category2: 'Usb / Cable',
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      price: '60'
    }]
  }).then(result => {
    console.log(result);
    Logs.logFile("9-threeds-payments-yeni-bir-kartla-odeme-al", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("9-threeds-payments-yeni-bir-kartla-odeme-al-hata", err);
  });
};

//3DS ödemesini tamamla
const completeThreeDSPayment = () => {
  PaymentsThreeDS.completePayment({
    locale: _iyzipay.default.LOCALE.TR,
    conversationId: (0, _nanoid.default)(),
    paymentId: "123456789",
    conversationData: "conversation data"
  }).then(result => {
    console.log(result);
    Logs.logFile("10-threeds-payments-odeme-tamamla", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("10-threeds-payments-odeme-tamamla-hata", err);
  });
};

//3DS ödemesini kayıtlı kartla yap
const initializeThreeDSPaymentsWithNewCardAndRegister = () => {
  PaymentsThreeDS.initializePayment({
    locale: _iyzipay.default.LOCALE.TR,
    /* iyzico istek sonucunda dönen metinlerin dilini ayarlamak için kullanılır */
    conversationId: '123456789',
    /* istek ve cevap eşleşmesi yapılması için kullanılabilecek ID */
    price: '300',
    /* Sepetteki ürünlerin her birisinin kırılımlarının toplamıdır. */
    paidPrice: '300',
    /* Tüm vade farkı vb hesaplanmış POS'tan çekilecek tutardır */
    currency: _iyzipay.default.CURRENCY.TRY,
    /* Para birimidir. Kurlar için Iyzico'dam özel izin gerektirecektir */
    installment: '1',
    /* Taksit bilgisidir. Tek çekim için 1 olmalıdır (1, 2, 3, 6, 9, 12) */
    basketId: 'B67832',
    /* Sepetin ID'sidir. Ödeme ID'si olarak tanımlanabilir */
    paymentChannel: _iyzipay.default.PAYMENT_CHANNEL.WEB,
    /* Ödemenin hangi platformdan yapıldığını belirtir. */
    paymentGroup: _iyzipay.default.PAYMENT_GROUP.PRODUCT,
    /* Ödeme grubu, varsayılan PRODUCT */
    callbackUrl: 'https://localhost/api/payment/3ds/complete',
    /* Ödeme tamamlandığında çağrılacak URL */
    paymentCard: {
      cardUserKey: "AQGKCQnEbgYgMEzLxW0BUvXx5gM=",
      cardToken: "U45kI8W5spZ5jGV2CmTy8TecTWc="
    },
    buyer: {
      id: 'BY789',
      /* Kullanıcının üst sistemdeki ID numarası */
      name: 'John',
      /* Kullanıcının adı */
      surname: 'Doe',
      /* Kullanıcın soyadı */
      gsmNumber: '+905350000000',
      /* Kullanıcının telefon numarası */
      email: 'email@email.com',
      /* Kullanıcının e-posta adresi */
      identityNumber: '00000000000',
      /* Kullanıcının kimlik numarası / eğer yoksa 11 tane 0 girilebilir */
      lastLoginDate: '2015-10-05 12:43:35',
      /* En son giriş tarihi */
      registrationDate: '2013-04-21 15:12:09',
      /* Kayıt tarihi */
      registrationAddress: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Kullanıcının kayıt adresi */
      ip: '85.34.78.112',
      /* Kullanıcının IP adresi */
      city: 'Istanbul',
      /* Kullanıcının şehri */
      country: 'Turkey',
      /* Kullanıcının ülkesi */
      zipCode: '34732' /* Kullanıcının posta kodu */
    },

    shippingAddress: {
      contactName: 'Jane Doe',
      /* Teslimat için Kullanıcının Adı */
      city: 'Istanbul',
      /* Teslimat için Kullanıcının Şehri */
      country: 'Turkey',
      /* Teslimat için Kullanıcının Ülkesi */
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Teslimat için Kullanıcının Şehri */
      zipCode: '34742' /* Teslimat için Kullanıcının Posta Kodu */
    },

    billingAddress: {
      contactName: 'Jane Doe',
      /* Fatura için Kullanıcının Adı */
      city: 'Istanbul',
      /* Fatura için Kullanıcının Şehri */
      country: 'Turkey',
      /* Fatura için Kullanıcının Ülkesi */
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Fatura için Kullanıcının Adresi */
      zipCode: '34742' /* Fatura için Kullanıcının Posta Kodu */
    },

    basketItems: [{
      id: 'BI101',
      /* Sepet ürününün ID'si */
      name: 'Binocular',
      /* Sepet ürününün adı */
      category1: 'Collectibles',
      /* Sepet ürününün ilk kategorisi */
      category2: 'Accessories',
      /* Sepet ürününün ikinci kategorisi */
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      /* Sepet ürününün tipi */
      price: '150' /* Sepet ürününün toplam fiyattaki kırılımı */
    }, {
      id: 'BI102',
      name: 'Game code',
      category1: 'Game',
      category2: 'Online Game Items',
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.VIRTUAL,
      price: '90'
    }, {
      id: 'BI103',
      name: 'Usb',
      category1: 'Electronics',
      category2: 'Usb / Cable',
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      price: '60'
    }]
  }).then(result => {
    console.log(result);
    Logs.logFile("11-threeds-payments-kayıtlı-bir-kartla-odeme-al", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("11-threeds-payments-kayıtlı-bir-kartla-odeme-al-hata", err);
  });
};

//3DS ödemesini kayıtlı olmayan bir kartla yap ve kartı kaydet
const initializeThreeDSPaymentsWithRegisteredCard = () => {
  PaymentsThreeDS.initializePayment({
    locale: _iyzipay.default.LOCALE.TR,
    conversationId: '123456789',
    price: '300',
    paidPrice: '300',
    currency: _iyzipay.default.CURRENCY.TRY,
    installment: '1',
    basketId: 'B67832',
    paymentChannel: _iyzipay.default.PAYMENT_CHANNEL.WEB,
    paymentGroup: _iyzipay.default.PAYMENT_GROUP.PRODUCT,
    callbackUrl: 'https://localhost/api/payment/3ds/complete',
    paymentCard: {
      cardUserKey: "AQGKCQnEbgYgMEzLxW0BUvXx5gM=",
      cardAlias: "Kredi Kartım Ödemeden Sonra",
      cardHolderName: 'John Doe',
      /* Kart sahibinin adı */
      cardNumber: '5528790000000008',
      /* Kart numarası */
      expireMonth: '12',
      /* Kartın son kullanma tarihi ay bilgisi */
      expireYear: '2030',
      /* Kartın son kullanma tarihi yıl bilgisi */
      cvc: '123',
      /* Kartın cvc bilgisi */
      registerCard: '1'
    },
    buyer: {
      id: 'BY789',
      /* Kullanıcının üst sistemdeki ID numarası */
      name: 'John',
      /* Kullanıcının adı */
      surname: 'Doe',
      /* Kullanıcın soyadı */
      gsmNumber: '+905350000000',
      /* Kullanıcının telefon numarası */
      email: 'email@email.com',
      /* Kullanıcının e-posta adresi */
      identityNumber: '00000000000',
      /* Kullanıcının kimlik numarası / eğer yoksa 11 tane 0 girilebilir */
      lastLoginDate: '2015-10-05 12:43:35',
      /* En son giriş tarihi */
      registrationDate: '2013-04-21 15:12:09',
      /* Kayıt tarihi */
      registrationAddress: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Kullanıcının kayıt adresi */
      ip: '85.34.78.112',
      /* Kullanıcının IP adresi */
      city: 'Istanbul',
      /* Kullanıcının şehri */
      country: 'Turkey',
      /* Kullanıcının ülkesi */
      zipCode: '34732' /* Kullanıcının posta kodu */
    },

    shippingAddress: {
      contactName: 'Jane Doe',
      /* Teslimat için Kullanıcının Adı */
      city: 'Istanbul',
      /* Teslimat için Kullanıcının Şehri */
      country: 'Turkey',
      /* Teslimat için Kullanıcının Ülkesi */
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Teslimat için Kullanıcının Şehri */
      zipCode: '34742' /* Teslimat için Kullanıcının Posta Kodu */
    },

    billingAddress: {
      contactName: 'Jane Doe',
      /* Fatura için Kullanıcının Adı */
      city: 'Istanbul',
      /* Fatura için Kullanıcının Şehri */
      country: 'Turkey',
      /* Fatura için Kullanıcının Ülkesi */
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Fatura için Kullanıcının Adresi */
      zipCode: '34742' /* Fatura için Kullanıcının Posta Kodu */
    },

    basketItems: [{
      id: 'BI101',
      /* Sepet ürününün ID'si */
      name: 'Binocular',
      /* Sepet ürününün adı */
      category1: 'Collectibles',
      /* Sepet ürününün ilk kategorisi */
      category2: 'Accessories',
      /* Sepet ürününün ikinci kategorisi */
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      /* Sepet ürününün tipi */
      price: '150' /* Sepet ürününün toplam fiyattaki kırılımı */
    }, {
      id: 'BI102',
      name: 'Game code',
      category1: 'Game',
      category2: 'Online Game Items',
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.VIRTUAL,
      price: '90'
    }, {
      id: 'BI103',
      name: 'Usb',
      category1: 'Electronics',
      category2: 'Usb / Cable',
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      price: '60'
    }]
  }).then(result => {
    console.log(result);
    Logs.logFile("12-threeds-payments-kayıtlı-olmayan-bir-kartla-odeme-al-ve-kartı-kaydet", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("12-threeds-payments-kayıtlı-olmayan-bir-kartla-odeme-al-ve-kartı-kaydet-hata", err);
  });
};

/*-----------------------------------------------*/
/* e) Checkout Form*/
/*-----------------------------------------------*/

//Checkout form içerisinde ödeme başlat
const initializeCheckoutForm = () => {
  Checkouts.initialize({
    locale: _iyzipay.default.LOCALE.TR,
    conversationId: '123456789',
    price: '300',
    paidPrice: '300',
    currency: _iyzipay.default.CURRENCY.TRY,
    installment: '1',
    basketId: 'B67832',
    paymentChannel: _iyzipay.default.PAYMENT_CHANNEL.WEB,
    paymentGroup: _iyzipay.default.PAYMENT_GROUP.PRODUCT,
    callbackUrl: 'https://localhost/api/checkout/complete/payment',
    cardUserKey: "AQGKCQnEbgYgMEzLxW0BUvXx5gM=",
    //cardUserkey ile iyzico'ya kayıtlı kartları alıyoruz. Paymentcard vermeye gerek kalmıyor
    enabledInstallments: [1, 2, 3, 6, 9],
    //taksit secenekleri
    buyer: {
      id: 'BY789',
      /* Kullanıcının üst sistemdeki ID numarası */
      name: 'John',
      /* Kullanıcının adı */
      surname: 'Doe',
      /* Kullanıcın soyadı */
      gsmNumber: '+905350000000',
      /* Kullanıcının telefon numarası */
      email: 'email@email.com',
      /* Kullanıcının e-posta adresi */
      identityNumber: '00000000000',
      /* Kullanıcının kimlik numarası / eğer yoksa 11 tane 0 girilebilir */
      lastLoginDate: '2015-10-05 12:43:35',
      /* En son giriş tarihi */
      registrationDate: '2013-04-21 15:12:09',
      /* Kayıt tarihi */
      registrationAddress: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Kullanıcının kayıt adresi */
      ip: '85.34.78.112',
      /* Kullanıcının IP adresi */
      city: 'Istanbul',
      /* Kullanıcının şehri */
      country: 'Turkey',
      /* Kullanıcının ülkesi */
      zipCode: '34732' /* Kullanıcının posta kodu */
    },

    shippingAddress: {
      contactName: 'Jane Doe',
      /* Teslimat için Kullanıcının Adı */
      city: 'Istanbul',
      /* Teslimat için Kullanıcının Şehri */
      country: 'Turkey',
      /* Teslimat için Kullanıcının Ülkesi */
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Teslimat için Kullanıcının Şehri */
      zipCode: '34742' /* Teslimat için Kullanıcının Posta Kodu */
    },

    billingAddress: {
      contactName: 'Jane Doe',
      /* Fatura için Kullanıcının Adı */
      city: 'Istanbul',
      /* Fatura için Kullanıcının Şehri */
      country: 'Turkey',
      /* Fatura için Kullanıcının Ülkesi */
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      /* Fatura için Kullanıcının Adresi */
      zipCode: '34742' /* Fatura için Kullanıcının Posta Kodu */
    },

    basketItems: [{
      id: 'BI101',
      /* Sepet ürününün ID'si */
      name: 'Binocular',
      /* Sepet ürününün adı */
      category1: 'Collectibles',
      /* Sepet ürününün ilk kategorisi */
      category2: 'Accessories',
      /* Sepet ürününün ikinci kategorisi */
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      /* Sepet ürününün tipi */
      price: '150' /* Sepet ürününün toplam fiyattaki kırılımı */
    }, {
      id: 'BI102',
      name: 'Game code',
      category1: 'Game',
      category2: 'Online Game Items',
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.VIRTUAL,
      price: '90'
    }, {
      id: 'BI103',
      name: 'Usb',
      category1: 'Electronics',
      category2: 'Usb / Cable',
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      price: '60'
    }]
  }).then(result => {
    console.log(result);
    Logs.logFile("13-checkout-form-payments", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("13-checkout-form-payments-hata", err);
  });
};

//Tamamlanmış yada tamamlanmamış checkout form ödeme bilgisini gösterir
const getForPayment = () => {
  Checkouts.getForPayment({
    locale: _iyzipay.default.LOCALE.TR,
    conversationId: (0, _nanoid.default)(),
    token: "ac010062-4859-4ae5-8e0d-1711eb8fdaaa"
  }).then(result => {
    console.log(result);
    Logs.logFile("14-checkout-form-payments-get-details", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("14-checkout-form-payments-get-details-hata", err);
  });
};

/*-----------------------------------------------*/
/* f) CANCEL PAYMENTS*/
/*-----------------------------------------------*/
//Ödemeyi iptal etme
const cancelPayments = () => {
  CancelPayments.cancelPayment({
    locale: _iyzipay.default.LOCALE.TR,
    conversationId: (0, _nanoid.default)(),
    paymentId: "19134154",
    //ödeme id
    ip: "85.34.78.112"
  }).then(result => {
    console.log(result);
    Logs.logFile("15-cancel-payments", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("15-cancel-payments-hata", err);
  });
};
const cancelPaymentsWithReason = () => {
  CancelPayments.cancelPayment({
    locale: _iyzipay.default.LOCALE.TR,
    conversationId: (0, _nanoid.default)(),
    paymentId: "19134310",
    //ödeme id
    ip: "85.34.78.112",
    reason: _iyzipay.default.REFUND_REASON.BUYER_REQUEST,
    //iptal sebebi
    description: "Kullanıcı istegiyle iptal edildi"
  }).then(result => {
    console.log(result);
    Logs.logFile("16-cancel-payments-reason", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("16-cancel-payments-reason-hata", err);
  });
};

/*-----------------------------------------------*/
/* g) REFUND PAYMENTS*/
/*-----------------------------------------------*/
//sepetteki ürünlerden bir kısmını iade etme
const refundPayments = () => {
  RefundPayments.refundPayment({
    locale: _iyzipay.default.LOCALE.TR,
    conversationId: (0, _nanoid.default)(),
    paymentTransactionId: "15966614",
    //geçekleşen ödeme altındaki her bir kalemin id'si
    price: "60",
    currency: _iyzipay.default.CURRENCY.TRY,
    ip: "85.34.78.112"
  }).then(result => {
    console.log(result);
    Logs.logFile("17-refund-payments", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("17-refund-payments-hata", err);
  });
};

//sepetteki ürünlerden bir kısmını iade etme, açıklama ve neden ile
const refundPaymentsWithReason = () => {
  RefundPayments.refundPayment({
    locale: _iyzipay.default.LOCALE.TR,
    conversationId: (0, _nanoid.default)(),
    paymentTransactionId: "15966614",
    //geçekleşen ödeme altındaki her bir kalemin id'si
    price: "60",
    currency: _iyzipay.default.CURRENCY.TRY,
    ip: "85.34.78.112",
    reason: _iyzipay.default.REFUND_REASON.BUYER_REQUEST,
    //iptal sebebi
    description: "Kullanıcı iade talebi ile"
  }).then(result => {
    console.log(result);
    Logs.logFile("18-refund-payments-reason", result);
  }).catch(err => {
    console.log(err);
    Logs.logFile("18-refund-payments-reason-hata", err);
  });
};

//createUserAndCards();
//createACardForUser();
//readCardForUser();
//deleteCardForUser();
//checkInstallments();
//createPayment()
//createPaymentAndSaveCard()
//createPaymentWithSavedCard()
//initializeThreeDSPayments()
//completeThreeDSPayment();
//initializeThreeDSPaymentsWithRegisteredCard();
//initializeThreeDSPaymentsWithRegisteredCard();
//initializeCheckoutForm();
//getForPayment()
//cancelPayments()
//cancelPaymentsWithReason()
//refundPayments()
//refundPaymentsWithReason()