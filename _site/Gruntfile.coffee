# gruntjs.com

module.exports = (grunt) ->
	"use strict"

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks)

	debug = !!grunt.option("debug")

	grunt.initConfig
		banner: "/*! Author: Artem Sapegin, http://sapegin.me, <%= grunt.template.today('yyyy') %> */\n"
		jshint:
			options:
				jshintrc: ".jshintrc"
			files: [
				"js/mylibs/*.js"
				"js/main.js"
			]
		concat:
			main:
				src: [
					"tamia/tamia/tamia.js"
					"tamia/blocks/*/*.js"
					"js/libs/fotorama/fotorama.js"
					"js/libs/jquery.stalker.js"
					"js/mylibs/*.js"
					"js/main.js"
				]
				dest: "build/scripts.js"
		uglify:
			options:
				banner: "<%= banner %>"
				compress:
					global_defs:
						DEBUG: debug
			main:
				files:
					"<%= concat.main.dest %>": "<%= concat.main.dest %>"
		stylus:
			options:
				"include css": true
				define:
					DEBUG: debug
				paths: [
					"tamia"
				]
			compile:
				files:
					"build/styles.css": "styles/index.styl"
		sprite:
			awards:
				src: 'img/awards/*.png',
				dest: 'build/awards.png',
				template: '{%= target %}_{%= name %} = {%= x %}px {%= y %}px {%= width %}px {%= height %}px\n.about-award_{%= name %}\n\tsprite({%= target %}_{%= name %})'
		imgo:
			images:
				src: "images/*"
			build:
				src: "build/*.png"
		compress:
			build:
				options:
					archive: 'genn.zip'
				src: [
					'{build,js,styles,tamia,images,media}/**/*',
					'*.{html,js,json,coffee}'
					]
				dest: '.'
		watch:
			options:
				livereload: true
			concat:
				files: "<%= concat.main.src %>"
				tasks: ["concat"]
			stylus:
				files: "styles/**/*"
				tasks: ["stylus"]


	grunt.registerTask "default", ["sprite", "imgo", "stylus", "jshint", "concat", "uglify"]
	grunt.registerTask "deploy", ["sprite", "imgo:build", "stylus", "concat", "uglify"]
