module.exports = function(grunt) {
  // Permet de configurer les plugins et tâches
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        
    // Configuration du plugin UglifyJS2
    // Les fichiers .js dans le répertoire app/js seront
    // minifiés et concaténés pour produire le fichier
    // app/js/phonecat.min.js
    src: {
      path: 'src',
      assets: '<%= src.path %>/assets',
      js : '<%= src.assets %>/js',
      css: '<%= src.assets %>/styles',
      fonts: '<%= src.assets %>/fonts',
    },

    components: {
      path: 'bower_components',
      bootstrap: '<%= components.path %>/bootstrap',
    },

      jshint: {
        all: ['Gruntfile.js', '/src/assets/js/*.js', '/src/assets/js/*.js']
      },

      cssmin: {
        minify: {
          expand: true,
          cwd: '<%= src.css %>',
          src: ['*.css', '!*.min.css'],
          dest: '<%= distDir.css %>',
          ext: '.min.css'
        }
      },

      uglify: {
        minify: {
          expand: true,
          cwd: '<%= src.js %>',
          src: ['*.js'],
          dest: '<%= distDir.js %>',
          ext: '.min.js'
        }
      },

      distDir: {
        path: 'dist',
        tmp: '<%= distDir.path %>/tmp',
        assets: '<%= distDir.path %>/assets',
        vendor: '<%= distDir.assets %>/vendor',
        fonts: '<%= distDir.assets %>/fonts',
        images: '<%= distDir.assets %>/images',
        css: '<%= distDir.assets %>/css',
        js: '<%= distDir.assets %>/js'
      },

      clean: {
        defaults: ['<%= distDir.path %>'],
        postBuild: ['<%= distDir.path %>/tmp']
      },

     
      copy: {
        // main: {
        //   src: '<%= src.path %>/index.html',
        //   dest: '<%= distDir.path %>/index.html',
        // },
        css: {
          src: '<%= components.bootstrap %>/dist/css/bootstrap.min.css',
          dest: '<%= distDir.css %>/bootstrap.min.css',
        },
        fonts: {
          expand: true,
          cwd: '<%= src.fonts %>',
          src: ['*.ttf'],
          dest: '<%= distDir.fonts %>',
          ext: '.ttf'
        },
        cssDev: {
          expand: true,
          cwd: '<%= src.css %>',
          src: ['*.css'],
          dest: '<%= distDir.css %>',
          ext: '.css'
        },
        jsDev: {
          expand: true,
          cwd: '<%= src.js %>',
          src: ['*.js'],
          dest: '<%= distDir.js %>',
          ext: '.js'
        }
      },

      bower: {
          dev: {
            dest: '<%= distDir.vendor %>'
          }
      },

      watch: {
          dist: {
            options: { livereload: true },
            files: ['<%= distDir.path %>/**']
          },
          index: {
            files: ['<%= src.path %>/index.html'],
            tasks: ['devFlag','index']
          },
          css: {
            files: ['<%= src.path %>/assets/styles/*'],
            tasks: ['copy:cssDev']
          },
          js: {
            files: ['<%= src.path %>/assets/js/*'],
            tasks: ['copy:jsDev']
          }
      }
    
  });

// task to process src/index.html
      grunt.registerTask('index', 'Process index.html template', function () {
      grunt.file.copy('src/index.html', 'dist/index.html', { process: grunt.template.process });
      });
      // tasks to set dev/prod flag
      grunt.registerTask('devFlag', 'dev flag', function () {
      grunt.config.set('dev', true);
      grunt.config.set('prod', false);

      });
      grunt.registerTask('prodFlag', 'prod flag', function () {
      grunt.config.set('prod', true);
      grunt.config.set('dev', false);
      });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower');


  grunt.registerTask('build', ['clean:defaults', "jshint", "cssmin", "copy", "bower", "index", "uglify"]);
  grunt.registerTask('build-dev', ['devFlag','build']);
  grunt.registerTask('build-prod', ['prodFlag','build']);
};