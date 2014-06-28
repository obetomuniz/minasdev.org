module.exports = function( grunt ) {
  'use strict';

  // autoload modules from package.json
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Tasks configurations
  grunt.initConfig({
    concat: {
      scripts: {
        src: [
          'sources/scripts/**/*.js'
        ],
        dest: '.tmp/scripts.js'
      },
      vendors: {
        src: ['sources/libraries/jquery/dist/jquery.min.js'],
        dest: '.tmp/vendors.js'
      },
      compile:{
        src: [
          '.tmp/vendors.js',
          '.tmp/scripts.js'
        ],
        dest: 'public/assets/javascripts/minasdev.js'
      }
    },
    stylus: {
      compile: {
        files: {
          'public/assets/stylesheets/minasdev.css': ['sources/stylus/minasdev.styl']
        }
      }
    },
    sprite: {
      figures: {
        'padding': 5,
        'src': ['sources/images/figures/*.png', 'sources/images/partners/*.png'],
        'destImg': 'public/assets/images/figures.png',
        'destCSS': 'sources/stylus/sprites/figures.styl'
      },
      icons: {
        'padding': 3,
        'src': ['sources/images/icons/*.png'],
        'destImg': 'public/assets/images/icons.png',
        'destCSS': 'sources/stylus/sprites/icons.styl'
      }
    },
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'public/assets/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/assets/images/'
        }]
      }
    },
    imageoptim: {
      dynamic: {
        options: {
          imageAlpha: true,
          quitAfter: true,
          // jpegMini: true
        },
        src: ['public/assets/images/']
      }
    },
    copy: {
      development: {
        files: [
          {expand: true, cwd: 'sources/images/background/', src: ['**'], dest: 'public/assets/images/'},
          {expand: true, cwd: 'sources/images/projects/', src: ['**'], dest: 'public/assets/images/projects/'}
        ]
      },
      production: {
        files: [
          {expand: true, src: ['public/**'], dest: '../production/'},
          {expand: true, src: ['./package.json'], dest: '../production/', filter: 'isFile'},
          {expand: true, src: ['./minasdev.js'], dest: '../production/', filter: 'isFile'}
        ]
      },
    },
    clean: {
      old: {
        options: {
          force: true
        },
        src: [
          '.tmp/',
          'public/assets/images/figures.png',
          'sources/stylus/sprites/figures.styl',
          'public/assets/images/icons.png',
          'sources/stylus/sprites/icons.styl',
          '../production/'
        ]
      },
      tmp: {
        options: {
          force: true
        },
        src: ['.tmp/']
      },
      sprites: {
        options: {
          force: true
        },
        src: [
          'public/assets/images/figures.png',
          'sources/stylus/sprites/figures.styl',
          'public/assets/images/icons.png',
          'sources/stylus/sprites/icons.styl'
        ]
      },
      production: {
        options: {
          force: true
        },
        src: ['../production/']
      }
    },
    watch: {
      application: {
        options: {
          livereload: true
        },
        files: 'sources/scripts/**/*.js',
        tasks: [
          'clean:tmp',
          'concat:vendors',
          'concat:scripts',
          'concat:compile'
        ]
      },
      style: {
        options: {
          livereload: true
        },
        files: 'sources/stylus/**/*.styl',
        tasks: ['stylus:compile']
      }
    },
    nodemon: {
      dev: {
        script: 'minasdev.js',
        options: {
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });
          },
          ignore: ['node_modules/**', 'sources/**', 'public/**'],
          cwd: __dirname
        }
      }
    },
    shell: {
        bower: {
            options: {
                stdout: true
            },
            command: 'bower install'
        }
    },
    concurrent: {
        target: {
            tasks: ['nodemon:dev', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    }

  });

  grunt.registerTask('default', [
    'clean:old',
    'shell:bower',
    'concat:vendors',
    'concat:scripts',
    'concat:compile',
    'sprite',
    'stylus:compile',
    'copy:development',
    'concurrent'
  ]);

  grunt.registerTask('images', [
    'imagemin:dynamic',
    'imageoptim:dynamic'
  ]);

  grunt.registerTask('build', [
    'clean:production',
    'copy:production'
  ]);

};




