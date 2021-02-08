module.exports = {
  docs: {
    index: ['index'],
    '自动化测试报告生成': [
      'test_report/intro',
      {
        vue_element: ['test_report/vue_element/demo', {'探索过程': ['test_report/vue_element/single']}],
        alpine_bootstrap: ['test_report/alpine_bootstrap/alpine', 'test_report/alpine_bootstrap/bootstrap']
      }
    ]
  }
};
