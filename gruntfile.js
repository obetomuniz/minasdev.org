module.exports = function( grunt ) {
  "use strict";

  // autoload modules from package.json
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  // Tasks configurations
  grunt.initConfig({

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'dev/index.html'
        }
      }
    },

    compass: {
      dist: {
        options: {
        outputStyle: "compressed",
          environment: "production",
          sassDir: "dev/statics/scss",
          cssDir: "dist/statics/styles/",
        fontsDir: "dist/statics/fonts/",
        imagesDir: "dist/statics/images"
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/statics/scripts/minasdev.js': ['dist/statics/scripts/minasdev.js'],
        }
      }
    },

    imagemin: {
      default: {
        files: [{
          expand: true,
          cwd: 'dev/statics/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dev/statics/images/'
        }]
      }
    },

    copy: {
      dist: {
        files: [
          { expand: true, cwd: 'dev/statics/images/', src: ['**'], dest: 'dist/statics/images/' },
          { expand: true, cwd: 'dev/statics/fonts/', src: ['**'], dest: 'dist/statics/fonts/' },
          { expand: true, cwd: 'dev/statics/scripts/', src: ['**'], dest: 'dist/statics/scripts/' },
          { expand: true, cwd: 'dev/misc/', src: ['**'], dest: 'dist/' },
          ]
      },
      distIMAGES: {
        files: [
          { expand: true, cwd: 'dev/statics/images/', src: ['**'], dest: 'dist/statics/images/' },
          ]
      },
      distJS: {
        files: [
          { expand: true, cwd: 'dev/statics/scripts/', src: ['**'], dest: 'dist/statics/scripts/' },
          ]
      },
      distFONTS: {
        files: [
          { expand: true, cwd: 'dev/statics/fonts/', src: ['**'], dest: 'dist/statics/fonts/' },
          ]
      }
    },

    clean: {
      dist: ["dist/"],
      distIMAGES: ["dist/statics/images/"],
      distJS: ["dist/statics/scripts/"],
      distFONTS: ["dist/statics/fonts/"]
    },

    watch: {
      options: {
        spawn: false
      },
      html: {
        files: ['dev/**/*.html'],
        tasks: ['htmlmin:dist']
      },
      scss: {
        files: ['dev/statics/scss/**/*.scss'],
        tasks: ['compass:dist']
      },
      js: {
        files: ['dev/statics/scripts/**/*.js'],
        tasks: ['clean:distJS', 'copy:distJS', 'uglify:dist']
      },
      images: {
        files: ['dev/statics/images/**/*'],
        tasks: ['clean:distIMAGES','imagemin:default','copy:distIMAGES']
      },
      fonts: {
        files: ['dev/statics/fonts/**/*'],
        tasks: ['clean:distFONTS','imagemin:default','copy:distFONTS']
      }
    },

    "regex-replace": {
        dist: {
            src: ['dist/statics/styles/minasdev.css'],
            actions: [
                {
                    name: 'bar',
                    search: '/dev',
                    replace: '',
                    flags: 'g'
                },
                {
                    name: 'bar',
                    search: '/dist',
                    replace: '',
                    flags: 'g'
                }
                ]
        }
    }

  });

  // task registration
  grunt.registerTask('default', ['watch']);

  grunt.registerTask('clear', ['clean:dist']);

  grunt.registerTask('images', ['clean:distIMAGES','imagemin:default','copy:distIMAGES']);

  grunt.registerTask('b', ['clean:dist', 'copy:dist', 'compass:dist', 'regex-replace:dist', 'uglify:dist', 'htmlmin:dist']);

};




