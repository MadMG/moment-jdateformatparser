/*jshint camelcase: false */
/*global module:false */
module.exports = function (grunt) {

  grunt.initConfig({
    babel: {
        dist: {
            files: {
                'moment-jdateformatparser.umd.js': 'moment-jdateformatparser.js'
            }
        }
    },

    pkg: grunt.file.readJSON('package.json'),

    /*
     Runs all .html files found in the test/ directory through PhantomJS.
     Prints the report in your terminal.
     */
    qunit: {
      files: ['test/**/*.html']
    },

    jshint: {
      all: ['Gruntfile.js', '*.js', 'test/**/*.js', '!*.min.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    uglify: {
      options: {
        preserveComments: 'some'
      },

      target: {
        files: [
          {
            src: 'moment-jdateformatparser.umd.js',
            dest: 'moment-jdateformatparser.min.js'
          }
        ]
      }
    },

    watch: {
      files: ['test/**/*.js', 'test/**/*.html', '*.js'],
      tasks: ['qunit']
    }
  });


  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['babel', 'minify']);

  grunt.registerTask('lint_tasks', ['jshint']);
  grunt.registerTask('lint', 'JavaScript Code Linting', function () {
    grunt.task.run('lint_tasks');
  });

  grunt.registerTask('minify', ['uglify']);

  grunt.registerTask('test', ['build', 'qunit']);

  grunt.registerTask('default', ['test']);

};
