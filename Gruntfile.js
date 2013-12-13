module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadTasks('build/grunt/tasks');

    var browsers = ['Chrome'];

    var tests = [ "tests/**/*.js" ];

    var browserOption = grunt.option('browser');
    var testsOption = grunt.option('tests');
    var jqueryOption = grunt.option('jquery');
    var jquery = 'src/jquery.js';

    if (testsOption) {
        tests = [ testsOption ];
    }

    if (jqueryOption) {
        jquery = "http://code.jquery.com/jquery-" + jqueryOption + ".min.js";
    }

    if (browserOption) {
        browsers = [ browserOption ];
    }

    var reporters = [ 'progress' ];

    if (grunt.option('junit-results')) {
        reporters.push('junit');
    }

    var jshint = grunt.file.readJSON('build/grunt/jshint.json');
    var files = grunt.option('files');
    jshint.files = files ? files.split(",") : jshint.files;

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: jshint,
        karma: {
            unit: {
                options: {
                    reportSlowerThan: 500,
                    basePath: '',
                    frameworks: ['qunit'],
                    preprocessors: {
                        'tests/**/.html': [],
                        'tests/**/*-fixture.html': ['html2js'],
                    },
                    files: [
                        { pattern: 'styles/**/*.*', watched: true, included: false },
                        { pattern: 'tests/router/sandbox.html', watched: true, included: false },
                        { pattern: 'tests/window/blank.html', watched: true, included: false },
                        { pattern: 'tests/editor/editorStyles.css', included: false },
                        { pattern: 'tests/**/*-fixture.html' },
                        jquery,
                        'tests/jquery.mockjax.js',

                        'src/kendo.core.js',
                        'src/kendo.userevents.js',
                        'src/kendo.draganddrop.js',
                        'src/kendo.touch.js',
                        'src/kendo.timezones.js',
                        'src/cultures/kendo.culture.de-DE.js',
                        'src/cultures/kendo.culture.bg-BG.js',
                        'src/cultures/kendo.culture.en-ZA.js',
                        "src/kendo.fx.js",
                        'src/kendo.data.js',
                        'src/aspnetmvc/kendo.data.aspnetmvc.js',
                        "src/kendo.data.odata.js",
                        "src/kendo.data.xml.js",
                        'src/kendo.list.js',
                        'src/kendo.calendar.js',
                        'src/kendo.popup.js',
                        'src/kendo.autocomplete.js',
                        'src/kendo.datepicker.js',
                        'src/kendo.timepicker.js',

                        "src/cultures/kendo.culture.es-ES.js",

                        'src/kendo.mobile.loader.js',
                        'src/kendo.mobile.scroller.js',
                        'src/kendo.mobile.view.js',
                        'src/kendo.mobile.pane.js',
                        'src/kendo.mobile.shim.js',
                        "src/kendo.mobile.popover.js",
                        "src/kendo.mobile.splitview.js",
                        "src/kendo.mobile.application.js",
                        "src/kendo.mobile.actionsheet.js",
                        "src/kendo.mobile.button.js",
                        "src/kendo.mobile.listview.js",
                        "src/kendo.mobile.scrollview.js",
                        "src/kendo.mobile.navbar.js",
                        "src/kendo.mobile.buttongroup.js",
                        "src/kendo.mobile.switch.js",
                        "src/kendo.mobile.tabstrip.js",
                        "src/kendo.mobile.drawer.js",
                        "src/kendo.mobile.modalview.js",

                        "src/kendo.router.js",
                        "src/kendo.view.js",
                        "src/kendo.tooltip.js",

                        "src/kendo.button.js",
                        "src/kendo.colorpicker.js",

                        "src/kendo.combobox.js",
                        "src/kendo.dropdownlist.js",
                        "src/kendo.numerictextbox.js",
                        "src/kendo.binder.js",
                        "src/kendo.validator.js",
                        'src/aspnetmvc/kendo.validator.aspnetmvc.js',
                        "src/kendo.editable.js",
                        "src/kendo.filtermenu.js",
                        "src/kendo.groupable.js",
                        "src/kendo.pager.js",
                        "src/kendo.selectable.js",
                        "src/kendo.sortable.js",
                        "src/kendo.columnmenu.js",
                        "src/kendo.grid.js",
                        "src/kendo.listview.js",
                        "src/kendo.menu.js",
                        "src/kendo.panelbar.js",
                        "src/kendo.slider.js",
                        "src/kendo.reorderable.js",
                        "src/kendo.resizable.js",
                        "src/kendo.splitter.js",
                        "src/kendo.tabstrip.js",
                        "src/kendo.datetimepicker.js",
                        "src/kendo.treeview.js",
                        "src/kendo.upload.js",
                        "src/kendo.window.js",
                        "src/kendo.imagebrowser.js",
                        "src/kendo.multiselect.js",
                        "src/kendo.scheduler.view.js",
                        "src/kendo.scheduler.dayview.js",
                        "src/kendo.scheduler.monthview.js",
                        "src/kendo.scheduler.agendaview.js",
                        "src/kendo.scheduler.recurrence.js",
                        "src/kendo.scheduler.js",
                        "src/kendo.progressbar.js",
                        "src/editor/main.js",
                        "src/editor/dom.js",
                        "src/editor/serializer.js",
                        "src/editor/range.js",
                        "src/editor/system.js",
                        "src/editor/inlineformat.js",
                        "src/editor/formatblock.js",
                        "src/editor/linebreak.js",
                        "src/editor/lists.js",
                        "src/editor/link.js",
                        "src/editor/image.js",
                        "src/editor/components.js",
                        "src/editor/indent.js",
                        "src/editor/viewhtml.js",
                        "src/editor/formatting.js",
                        "src/editor/toolbar.js",
                        "src/editor/tables.js",
                        'tests/kendo-test-helpers.js',
                        'tests/**/test-helper.js',
                        'demos/mvc/content/shared/js/less.js',
                        { pattern: 'demos/mvc/App_Data/*json', included: false },
                        'demos/mvc/content/mobilethemebuilder/scripts/colorengine.js',
                        'demos/mvc/content/mobilethemebuilder/scripts/gradientengine.js',

                        'src/kendo.dataviz.core.js',
                        'src/kendo.diagram.utils.js',
                        'src/kendo.dataviz.canvas.js',
                        'src/kendo.dataviz.themes.js',
                        'src/kendo.dataviz.svg.js',
                        'src/kendo.dataviz.vml.js',
                        'src/kendo.diagram.math.js',
                        'tests/chart/util.js',
                        'src/kendo.dataviz.barcode.js',
                        'src/kendo.dataviz.qrcode.js',
                        'src/kendo.dataviz.gauge.js',
                        'src/kendo.diagram.svg.js',
                        'src/kendo.dataviz.chart.js',
                        'src/kendo.dataviz.sparkline.js',
                        'src/kendo.dataviz.chart.polar.js',
                        'src/kendo.dataviz.chart.funnel.js',
                        'src/kendo.dataviz.stock.js',

                        "src/dataviz/util.js",
                        "src/dataviz/geometry.js",
                        "src/dataviz/drawing/core.js",
                        "src/dataviz/drawing/shapes.js",
                        "src/dataviz/drawing/svg.js",
                        "src/dataviz/drawing/vml.js",
                        "src/dataviz/drawing/canvas.js",

                        "src/dataviz/map/location.js",
                        "src/dataviz/map/crs.js",
                        "src/dataviz/map/navigator.js",
                        "src/dataviz/map/layers/shape.js",
                        "src/dataviz/map/layers/tile.js",
                        "src/dataviz/map/layers/marker.js",
                        "src/dataviz/map/main.js",
                        "src/dataviz/map/attribution.js",
                        'tests/map/util.js',

                        'src/kendo.diagram.services.js',
                        'src/kendo.diagram.extensions.js',
                        'src/kendo.diagram.dom.js',
                        'src/kendo.diagram.layout.js',

                        'themebuilder/scripts/themebuilder.js',

                        'tests/chart/util.js',
                        'tests/upload/helper.js',
                        'tests/upload/select.js',
                        'tests/upload/selection.js',
                        'tests/upload/async.js',
                        'tests/upload/asyncnomultiple.js',
                        'tests/upload/asyncnoauto.js',
                        'tests/upload/upload.js',
                        'tests/upload/success.js',
                        'tests/upload/error.js',
                        'tests/upload/cancel.js',
                        'tests/upload/remove.js',

                        { pattern: 'src/kendo.editor.js', included: false }, // download builder needs this
                        { pattern: 'src/kendo.aspnetmvc.js', included: false }, // download builder needs this

                        'download-builder/scripts/script-resolver.js',
                        'tests/diagram/common.js'
                    ].concat(tests),

                    exclude: [ 'src/kendo.icenium.js', 'src/kendo.web.js', 'src/kendo.all.js', 'src/kendo.mobile.js', 'src/kendo.dataviz.js', 'src/kendo.model.js', 'src/kendo.winjs.js', 'src/*min.js' ],

                    reporters: reporters,

                    junitReporter: {
                      outputFile: grunt.option('junit-results')
                    },

                    colors: true,

                    autoWatch: true,

                    browsers: browsers,

                    captureTimeout: 60000,

                    singleRun: grunt.option('single-run')
                }
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['karma:unit']);
    grunt.registerTask( "build", [ "concat:all", "uglify:all"] );
};
