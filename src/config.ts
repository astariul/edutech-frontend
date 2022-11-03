

class PaymentConfig {
  readonly MODE: string = "production"; //결제 테스트모드

  getPGCodeMIDMap(mode: string) {
    //가맹점 ID(mode='test')
    const map = new Map<string, string>();
    switch (mode){
      case "test":
        map.set("html5_inicis", "INIpayTest");
        map.set("danal_tpay","9810030929");
        map.set("uplus", "tlgdacomxpay");
        map.set("tosspay", "tosstest");
        map.set("kakaopay", "TC0ONETIME");
        map.set("payco", "PARTNERTEST");
        map.set("eximbay", "1849705C64");
        map.set("smartro", "iamport01m");
        map.set("kcp", "T0000");
        // map.set("스마일페이", "cnstest25m");
        break;
      case "production":
        //TODO: 테스트 MID(상점ID) 변경 필요
        map.set("html5_inicis", "MOI3851918");
        map.set("danal_tpay","9810030929");
        map.set("uplus", "tlgdacomxpay");
        map.set("tosspay", "IMPTjobssu01");
        map.set("kakaopay", "TC0ONETIME");
        map.set("payco", "PARTNERTEST");
        map.set("eximbay", "1849705C64");
        map.set("스마트로", "iamport01m");
        map.set("kcp", "T0000");
        // map.set("스마일페이", "cnstest25m");
        break;
    }
    return map;
  }

  getPayMethodsByPG(pgCode: string): string[] {
    const map = new Map<string, string[]>();
    map.set("html5_inicis", ["신용카드", "실시간계좌이체", "가상계좌", "휴대폰결제"]);
    map.set("danal_tpay", ["신용카드"]);
    map.set("uplus", ["신용카드", "실시간계좌이체", "가상계좌", "휴대폰결제"]);
    map.set("tosspay", ["간편결제"]);
    map.set("kakaopay", ["간편결제"]);
    map.set("payco", ["간편결제"]);
    map.set("eximbay", ["신용카드"]);
    map.set("smartro", ["신용카드"]);
    map.set("kcp", ["신용카드", "실시간계좌이체", "가상계좌", "휴대폰결제"]);
    // map.set("smilepay", ["간편결제"]);
    return map.get(pgCode) as string[];
  }

  getPGCodeMap() {
    const map = new Map<string, string>();
    map.set("KG이니시스", "html5_inicis");
    map.set("다날","danal_tpay");
    map.set("토스페이먼츠", "uplus");
    map.set("토스페이", "tosspay");
    map.set("카카오페이", "kakaopay");
    map.set("페이코", "payco");
    map.set("엑심베이", "eximbay");
    map.set("스마트로", "smartro");
    map.set("NHN KCP", "kcp");
    // map.set("스마일페이", "smilepay");
    return map;
  }

  getPaymentMethodCodeMap() {
    // (참고) 결제수단 구분 코드 : https://chai-iamport.gitbook.io/iamport/sdk/javascript-sdk/payrq
    const map = new Map<string, string>();
    map.set("신용카드", "card");
    map.set("실시간계좌이체", "trans");
    map.set("가상계좌", "vbank");
    map.set("휴대폰결제", "phone");
    map.set("카카오페이", "kakaopay");
    map.set("토스간편결제", "tosspay");
    map.set("페이코", "payco");
    return map
  }

  getAvailablePGCodeByMethod(paymentMethod: string) {
    const map = new Map<string, string>();
    map.set("card", "html5_inicis");
    map.set("vbank","html5_inicis");
    map.set("tosspay", "tosspay");

    return map.get(paymentMethod)
  }
}

export default PaymentConfig;
