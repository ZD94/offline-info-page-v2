(function () {
  'use strict'

  const profileScreenshots = [
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

  const planScreenshots = [
    '计划tab1.jpg',
    '计划tab2.jpg',
    '计划tab3.jpg',
    '计划tab4.jpg',
    '计划tab5.jpg',
    '计划tab6.jpg',
    '计划tab7.jpg',
    '计划tab8.jpg',
    '计划tab9.jpg',
    '计划tab10.jpg',
    '计划tab-全部计划1.jpg',
    '计划tab-全部计划2.jpg',
    '计划tab-全部计划3.jpg',
    '计划tab-全部计划-筛选1.jpg',
    '计划tab-全部计划-筛选2.jpg',
    '计划tab-训练计划1.jpg',
    '计划tab-训练计划2.jpg',
    '计划tab-训练计划3.jpg',
    '计划tab-训练计划4.jpg',
    '计划tab-训练计划5.jpg',
    '计划tab-训练计划6.jpg',
    '计划tab-训练计划7.jpg',
    '计划tab-训练计划8.jpg',
    '计划tab-训练计划9.jpg',
    '计划tab-训练计划10.jpg',
    '计划tab-训练计划11.jpg',
    '计划tab-训练计划-添加课程1.jpg',
    '计划tab-训练计划-添加课程2.jpg',
    '计划tab-训练计划-添加课程3.jpg',
    '计划tab-训练计划-添加课程4.jpg',
    '计划tab-训练计划-添加课程5.jpg',
    '计划tab-训练计划-添加课程6.jpg',
    '计划tab-训练计划-添加课程7.jpg',
    '计划tab-训练计划-添加课程8.jpg'
  ]

  const createPages = (screenshots, prefix) => screenshots.map((screenshot, index) => ({
    order: index + 1,
    name: `${prefix}-${String(index + 1).padStart(2, '0')}`,
    label: screenshot.replace(/\.jpg$/i, ''),
    screenshot,
    items: []
  }))

  const profilePages = createPages(profileScreenshots, 'profile-tab')
  const planPages = createPages(planScreenshots, 'plan-tab')

  const copyPages = pages => pages.map(page => ({
    ...page,
    items: []
  }))

  window.QUESTIONNAIRE_TEXTS = copyPages(profilePages)
  window.REVIEW_QUESTIONNAIRE_TEXTS = copyPages(profilePages)
  window.QUESTIONNAIRE_VARIANTS = {}
  window.REVIEW_QUESTIONNAIRE_VARIANTS = {}
  window.SCREENSHOT_TABS = [{
    id: 'profile-tab',
    label: '我的tab',
    directory: '我的tab',
    pages: copyPages(profilePages),
    reviewPages: copyPages(profilePages),
    variants: {},
    reviewVariants: {}
  }, {
    id: 'plan-tab',
    label: '计划tab',
    directory: '计划tab',
    pages: copyPages(planPages),
    reviewPages: copyPages(planPages),
    variants: {},
    reviewVariants: {}
  }]
})()
