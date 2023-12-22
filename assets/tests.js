'use strict';

define('ember-app/tests/acceptance/flexberry/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s prilozhenie 03 док план за на д l');

  (0, _qunit.test)('testing i-i-s-prilozhenie-03-док-план-за-на-д-l', function (assert) {
    var _this = this;

    visit('/i-i-s-prilozhenie-03-док-план-за-на-д-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s prilozhenie 03 организация l');

  (0, _qunit.test)('testing i-i-s-prilozhenie-03-организация-l', function (assert) {
    var _this = this;

    visit('/i-i-s-prilozhenie-03-организация-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s prilozhenie 03 спр виды раб l');

  (0, _qunit.test)('testing i-i-s-prilozhenie-03-спр-виды-раб-l', function (assert) {
    var _this = this;

    visit('/i-i-s-prilozhenie-03-спр-виды-раб-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s prilozhenie 03 спр ед измер l');

  (0, _qunit.test)('testing i-i-s-prilozhenie-03-спр-ед-измер-l', function (assert) {
    var _this = this;

    visit('/i-i-s-prilozhenie-03-спр-ед-измер-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s prilozhenie 03 спр контр аг l');

  (0, _qunit.test)('testing i-i-s-prilozhenie-03-спр-контр-аг-l', function (assert) {
    var _this = this;

    visit('/i-i-s-prilozhenie-03-спр-контр-аг-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s prilozhenie 03 спр номен l');

  (0, _qunit.test)('testing i-i-s-prilozhenie-03-спр-номен-l', function (assert) {
    var _this = this;

    visit('/i-i-s-prilozhenie-03-спр-номен-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s prilozhenie 03 спр объект стр l');

  (0, _qunit.test)('testing i-i-s-prilozhenie-03-спр-объект-стр-l', function (assert) {
    var _this = this;

    visit('/i-i-s-prilozhenie-03-спр-объект-стр-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s prilozhenie 03 спр пользов l');

  (0, _qunit.test)('testing i-i-s-prilozhenie-03-спр-пользов-l', function (assert) {
    var _this = this;

    visit('/i-i-s-prilozhenie-03-спр-пользов-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s prilozhenie 03 спр тип транс ср l');

  (0, _qunit.test)('testing i-i-s-prilozhenie-03-спр-тип-транс-ср-l', function (assert) {
    var _this = this;

    visit('/i-i-s-prilozhenie-03-спр-тип-транс-ср-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s prilozhenie 03 спр трансп ср l');

  (0, _qunit.test)('testing i-i-s-prilozhenie-03-спр-трансп-ср-l', function (assert) {
    var _this = this;

    visit('/i-i-s-prilozhenie-03-спр-трансп-ср-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s prilozhenie 03 статьи затрат l');

  (0, _qunit.test)('testing i-i-s-prilozhenie-03-статьи-затрат-l', function (assert) {
    var _this = this;

    visit('/i-i-s-prilozhenie-03-статьи-затрат-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s prilozhenie 03 факт выпол раб l');

  (0, _qunit.test)('testing i-i-s-prilozhenie-03-факт-выпол-раб-l', function (assert) {
    var _this = this;

    visit('/i-i-s-prilozhenie-03-факт-выпол-раб-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-док-план-за-на-д-e', 'Unit | Controller | i-i-s-prilozhenie-03-док-план-за-на-д-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-док-план-за-на-д-l', 'Unit | Controller | i-i-s-prilozhenie-03-док-план-за-на-д-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-организация-e', 'Unit | Controller | i-i-s-prilozhenie-03-организация-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-организация-l', 'Unit | Controller | i-i-s-prilozhenie-03-организация-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-спр-виды-раб-e', 'Unit | Controller | i-i-s-prilozhenie-03-спр-виды-раб-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-спр-виды-раб-l', 'Unit | Controller | i-i-s-prilozhenie-03-спр-виды-раб-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-спр-ед-измер-e', 'Unit | Controller | i-i-s-prilozhenie-03-спр-ед-измер-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-спр-ед-измер-l', 'Unit | Controller | i-i-s-prilozhenie-03-спр-ед-измер-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-спр-контр-аг-e', 'Unit | Controller | i-i-s-prilozhenie-03-спр-контр-аг-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-спр-контр-аг-l', 'Unit | Controller | i-i-s-prilozhenie-03-спр-контр-аг-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-спр-номен-e', 'Unit | Controller | i-i-s-prilozhenie-03-спр-номен-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-спр-номен-l', 'Unit | Controller | i-i-s-prilozhenie-03-спр-номен-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-спр-объект-стр-e', 'Unit | Controller | i-i-s-prilozhenie-03-спр-объект-стр-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-спр-объект-стр-l', 'Unit | Controller | i-i-s-prilozhenie-03-спр-объект-стр-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-спр-пользов-e', 'Unit | Controller | i-i-s-prilozhenie-03-спр-пользов-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-спр-пользов-l', 'Unit | Controller | i-i-s-prilozhenie-03-спр-пользов-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-спр-тип-транс-ср-e', 'Unit | Controller | i-i-s-prilozhenie-03-спр-тип-транс-ср-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-спр-тип-транс-ср-l', 'Unit | Controller | i-i-s-prilozhenie-03-спр-тип-транс-ср-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-спр-трансп-ср-e', 'Unit | Controller | i-i-s-prilozhenie-03-спр-трансп-ср-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-спр-трансп-ср-l', 'Unit | Controller | i-i-s-prilozhenie-03-спр-трансп-ср-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-статьи-затрат-e', 'Unit | Controller | i-i-s-prilozhenie-03-статьи-затрат-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-статьи-затрат-l', 'Unit | Controller | i-i-s-prilozhenie-03-статьи-затрат-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-факт-выпол-раб-e', 'Unit | Controller | i-i-s-prilozhenie-03-факт-выпол-раб-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-prilozhenie-03-факт-выпол-раб-l', 'Unit | Controller | i-i-s-prilozhenie-03-факт-выпол-раб-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-док-план-за-на-д', 'Unit | Model | i-i-s-prilozhenie-03-док-план-за-на-д', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-организация', 'Unit | Model | i-i-s-prilozhenie-03-организация', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-спр-виды-раб', 'Unit | Model | i-i-s-prilozhenie-03-спр-виды-раб', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-спр-ед-измер', 'Unit | Model | i-i-s-prilozhenie-03-спр-ед-измер', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-спр-контр-аг', 'Unit | Model | i-i-s-prilozhenie-03-спр-контр-аг', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-спр-номен', 'Unit | Model | i-i-s-prilozhenie-03-спр-номен', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-спр-объект-стр', 'Unit | Model | i-i-s-prilozhenie-03-спр-объект-стр', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-спр-пользов', 'Unit | Model | i-i-s-prilozhenie-03-спр-пользов', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-спр-тип-транс-ср', 'Unit | Model | i-i-s-prilozhenie-03-спр-тип-транс-ср', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-спр-трансп-ср', 'Unit | Model | i-i-s-prilozhenie-03-спр-трансп-ср', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-статьи-затрат', 'Unit | Model | i-i-s-prilozhenie-03-статьи-затрат', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'Unit | Model | i-i-s-prilozhenie-03-т-ч-пл-з-на-д', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'Unit | Model | i-i-s-prilozhenie-03-т-ч-факт-вып-р', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-факт-выпол-раб', 'Unit | Model | i-i-s-prilozhenie-03-факт-выпол-раб', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-док-план-за-на-д-e', 'Unit | Route | i-i-s-prilozhenie-03-док-план-за-на-д-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-док-план-за-на-д-l', 'Unit | Route | i-i-s-prilozhenie-03-док-план-за-на-д-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-организация-e', 'Unit | Route | i-i-s-prilozhenie-03-организация-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-организация-l', 'Unit | Route | i-i-s-prilozhenie-03-организация-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-спр-виды-раб-e', 'Unit | Route | i-i-s-prilozhenie-03-спр-виды-раб-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-спр-виды-раб-l', 'Unit | Route | i-i-s-prilozhenie-03-спр-виды-раб-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-спр-ед-измер-e', 'Unit | Route | i-i-s-prilozhenie-03-спр-ед-измер-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-спр-ед-измер-l', 'Unit | Route | i-i-s-prilozhenie-03-спр-ед-измер-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-спр-контр-аг-e', 'Unit | Route | i-i-s-prilozhenie-03-спр-контр-аг-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-спр-контр-аг-l', 'Unit | Route | i-i-s-prilozhenie-03-спр-контр-аг-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-спр-номен-e', 'Unit | Route | i-i-s-prilozhenie-03-спр-номен-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-спр-номен-l', 'Unit | Route | i-i-s-prilozhenie-03-спр-номен-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-спр-объект-стр-e', 'Unit | Route | i-i-s-prilozhenie-03-спр-объект-стр-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-спр-объект-стр-l', 'Unit | Route | i-i-s-prilozhenie-03-спр-объект-стр-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-спр-пользов-e', 'Unit | Route | i-i-s-prilozhenie-03-спр-пользов-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-спр-пользов-l', 'Unit | Route | i-i-s-prilozhenie-03-спр-пользов-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-спр-тип-транс-ср-e', 'Unit | Route | i-i-s-prilozhenie-03-спр-тип-транс-ср-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-спр-тип-транс-ср-l', 'Unit | Route | i-i-s-prilozhenie-03-спр-тип-транс-ср-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-спр-трансп-ср-e', 'Unit | Route | i-i-s-prilozhenie-03-спр-трансп-ср-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-спр-трансп-ср-l', 'Unit | Route | i-i-s-prilozhenie-03-спр-трансп-ср-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-статьи-затрат-e', 'Unit | Route | i-i-s-prilozhenie-03-статьи-затрат-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-статьи-затрат-l', 'Unit | Route | i-i-s-prilozhenie-03-статьи-затрат-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-факт-выпол-раб-e', 'Unit | Route | i-i-s-prilozhenie-03-факт-выпол-раб-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-prilozhenie-03-факт-выпол-раб-l', 'Unit | Route | i-i-s-prilozhenie-03-факт-выпол-раб-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-prilozhenie-03-\u0434\u043E\u043A-\u043F\u043B\u0430\u043D-\u0437\u0430-\u043D\u0430-\u0434-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-док-план-за-на-д', 'Unit | Serializer | i-i-s-prilozhenie-03-док-план-за-на-д', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-prilozhenie-03-док-план-за-на-д', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-prilozhenie-03-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-организация', 'Unit | Serializer | i-i-s-prilozhenie-03-организация', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-prilozhenie-03-организация', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0432\u0438\u0434\u044B-\u0440\u0430\u0431-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-спр-виды-раб', 'Unit | Serializer | i-i-s-prilozhenie-03-спр-виды-раб', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-prilozhenie-03-спр-виды-раб', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-спр-ед-измер', 'Unit | Serializer | i-i-s-prilozhenie-03-спр-ед-измер', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-prilozhenie-03-спр-ед-измер', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440-\u0430\u0433-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-спр-контр-аг', 'Unit | Serializer | i-i-s-prilozhenie-03-спр-контр-аг', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-prilozhenie-03-спр-контр-аг', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043D\u043E\u043C\u0435\u043D-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-спр-номен', 'Unit | Serializer | i-i-s-prilozhenie-03-спр-номен', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-prilozhenie-03-спр-номен', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441\u0442\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-спр-объект-стр', 'Unit | Serializer | i-i-s-prilozhenie-03-спр-объект-стр', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-prilozhenie-03-спр-объект-стр', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u043F\u043E\u043B\u044C\u0437\u043E\u0432-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-спр-пользов', 'Unit | Serializer | i-i-s-prilozhenie-03-спр-пользов', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-prilozhenie-03-спр-пользов', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0438\u043F-\u0442\u0440\u0430\u043D\u0441-\u0441\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-спр-тип-транс-ср', 'Unit | Serializer | i-i-s-prilozhenie-03-спр-тип-транс-ср', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-prilozhenie-03-\u0441\u043F\u0440-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-спр-трансп-ср', 'Unit | Serializer | i-i-s-prilozhenie-03-спр-трансп-ср', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-prilozhenie-03-спр-трансп-ср', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-prilozhenie-03-\u0441\u0442\u0430\u0442\u044C\u0438-\u0437\u0430\u0442\u0440\u0430\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-статьи-затрат', 'Unit | Serializer | i-i-s-prilozhenie-03-статьи-затрат', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-prilozhenie-03-статьи-затрат', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u043F\u043B-\u0437-\u043D\u0430-\u0434-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'Unit | Serializer | i-i-s-prilozhenie-03-т-ч-пл-з-на-д', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-prilozhenie-03-\u0442-\u0447-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F-\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'Unit | Serializer | i-i-s-prilozhenie-03-т-ч-факт-вып-р', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-prilozhenie-03-\u0444\u0430\u043A\u0442-\u0432\u044B\u043F\u043E\u043B-\u0440\u0430\u0431-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-prilozhenie-03-факт-выпол-раб', 'Unit | Serializer | i-i-s-prilozhenie-03-факт-выпол-раб', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-prilozhenie-03-факт-выпол-раб', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-prilozhenie-03-док-план-за-на-д', 'model:i-i-s-prilozhenie-03-организация', 'model:i-i-s-prilozhenie-03-спр-виды-раб', 'model:i-i-s-prilozhenie-03-спр-ед-измер', 'model:i-i-s-prilozhenie-03-спр-контр-аг', 'model:i-i-s-prilozhenie-03-спр-номен', 'model:i-i-s-prilozhenie-03-спр-объект-стр', 'model:i-i-s-prilozhenie-03-спр-пользов', 'model:i-i-s-prilozhenie-03-спр-тип-транс-ср', 'model:i-i-s-prilozhenie-03-спр-трансп-ср', 'model:i-i-s-prilozhenie-03-статьи-затрат', 'model:i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'model:i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'model:i-i-s-prilozhenie-03-факт-выпол-раб', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
