(function () {
  'use strict'

  const screenshots = [
    'ios支付成功.jpg',
    '设备管理搜索按钮.jpg',
    '我的tab1.jpg',
    '我的tab2.jpg',
    '我的tab3.jpg',
    '我的tab4.jpg',
    '我的tab-spax挑战页面.jpg',
    '我的tab-操场跑1.jpg',
    '我的tab-操场跑2.jpg',
    '我的tab-操场跑3.jpg',
    '我的tab-操场跑4.jpg',
    '我的tab-操场跑5.jpg',
    '我的tab-操场跑6.jpg',
    '我的tab-操场跑7.jpg',
    '我的tab-操场跑8.jpg',
    '我的tab-操场跑9.jpg',
    '我的tab-操场跑10.jpg',
    '我的tab-会员中心1.jpg',
    '我的tab-会员中心2.jpg',
    '我的tab-会员中心3.jpg',
    '我的tab-会员中心4.jpg',
    '我的tab-设备管理1.jpg',
    '我的tab-设备管理2.jpg',
    '我的tab-设备管理3.jpg',
    '我的tab-设备管理-彩屏跑步机1.jpg',
    '我的tab-设备管理-彩屏跑步机2.jpg',
    '我的tab-设备管理-彩屏跑步机3.jpg',
    '我的tab-设备管理-彩屏跑步机4.jpg',
    '我的tab-设备管理-单车1.jpg',
    '我的tab-设备管理-单车2.jpg',
    '我的tab-设备管理-划船机1.jpg',
    '我的tab-设备管理-划船机2.jpg',
    '我的tab-设备管理-健腹轮1.jpg',
    '我的tab-设备管理-健腹轮2.jpg',
    '我的tab-设备管理-跑步机1.jpg',
    '我的tab-设备管理-跑步机2.jpg',
    '我的tab-设备管理-跑步机3.jpg',
    '我的tab-设备管理-跑步机4.jpg',
    '我的tab-设备管理-手表1.jpg',
    '我的tab-设备管理-手表2.jpg',
    '我的tab-设备管理-手表3.jpg',
    '我的tab-设备管理-手表4.jpg',
    '我的tab-设备管理-跳绳1.jpg',
    '我的tab-设备管理-跳绳2.jpg',
    '我的tab-设备管理-椭圆机1.jpg',
    '我的tab-设备管理-椭圆机2.jpg',
    '我的tab-设备管理-椭圆机3.jpg',
    '我的tab-设置-关于我们页面.jpg',
    '我的tab-设置-关于我们页面1.jpg',
    '我的tab-设置-关于我们页面-隐私协议.jpg',
    '我的tab-设置-关于我们页面-用户协议.jpg',
    '我的tab-设置页面.jpg',
    '我的tab-设置页面1.jpg',
    '我的tab-设置页面2.jpg',
    '我的tab-设置页面-帮助反馈1.jpg',
    '我的tab-设置页面-帮助反馈2.jpg',
    '我的tab-我的收藏1.jpg',
    '我的tab-我的收藏2.jpg',
    '我的tab-我的收藏3.jpg',
    '我的tab-运动结果页1.jpg',
    '我的tab-运动结果页2.jpg',
    '我的tab-运动结果页3.jpg',
    '我的tab-运动结果页4.jpg',
    '我的tab-运动结果页5.jpg',
    '我的tab-运动结果页6.jpg',
    '我的tab-运动结果页7.jpg',
    '我的tab-运动结果页8.jpg',
    '运动结果页分享.jpg',
    '支付成功.jpg'
  ]

  const pages = screenshots.map((screenshot, index) => ({
    order: index + 1,
    name: `profile-tab-${String(index + 1).padStart(2, '0')}`,
    label: screenshot.replace(/\.jpg$/i, ''),
    screenshot,
    items: []
  }))

  const copyPages = () => pages.map(page => ({
    ...page,
    items: []
  }))

  window.QUESTIONNAIRE_TEXTS = copyPages()
  window.REVIEW_QUESTIONNAIRE_TEXTS = copyPages()
  window.QUESTIONNAIRE_VARIANTS = {}
  window.REVIEW_QUESTIONNAIRE_VARIANTS = {}
})()
