# C++ 学习资源

## Awesome C++

1. <https://faraz.work/awesome-cpp/>
2. <https://awesomecpp.com/>
3. <https://cpp.libhunt.com/>
4. <https://github.com/r-lyeh/single_file_libs>
5. <https://en.cppreference.com/>

## IDE & Editor

1. [CLion](https://www.jetbrains.com/clion/) 非商业使用免费 ⭐⭐⭐⭐⭐
2. [Zed](https://zed.dev/) 开箱即用 ⭐⭐⭐⭐⭐
3. [Kate](https://kate-editor.org/) LSP 开箱即用 ⭐⭐⭐
4. [Code\:\:Blocks](https://www.codeblocks.org/) 支持 SFML、wxWidgets 应用模板，wxSmith 插件 ⭐⭐⭐
5. [CodeLite](https://codelite.org/) 支持 wxWidgets 应用模板，wxCrafter 插件
6. [VSCode](https://code.visualstudio.com/)、[VSCodium](https://vscodium.com/)
7. [Helix](https://helix-editor.com/) LSP 开箱即用

## Compiler

三大 C++ 编译器：GCC、Clang、Visual C++。

1. [MSYS2](https://www.msys2.org/) + [Mingw-w64](https://www.mingw-w64.org/), 其它类似项目：
	1. <https://mxe.cc/>
	2. <https://winlibs.com/>
	3. https://github.com/skeeto/w64devkit/
2. [Build Tools For Visual Studio](https://learn.microsoft.com/en-us/cpp/build/building-on-the-command-line?view=msvc-170)、[Visual Studio Community](https://visualstudio.microsoft.com/free-developer-offers/)
3. [Xcode command line tools](https://developer.apple.com/xcode/resources/)
4. [Emscripten](https://emscripten.org/) 使用 Clang 将 C/C++ 程序编译到 WASM 从而能在 Web 浏览器里运行

## Debugger & Linter

1. [DDD](https://www.gnu.org/software/ddd/)
2. [Valgrind](https://valgrind.org/)
3. [Cppcheck](https://cppcheck.sourceforge.io/)
4. [Clang-tidy](https://clang.llvm.org/extra/clang-tidy/)
5. [Clang-analyzer](https://clang-analyzer.llvm.org/)
6. [AddressSanitizer](https://github.com/google/sanitizers/wiki/AddressSanitizer): [Clang](https://clang.llvm.org/docs/AddressSanitizer.html), [GCC](https://gcc.gnu.org/onlinedocs/gcc/Instrumentation-Options.html)

## Code Formatter

1. [Clang-format](https://clang.llvm.org/docs/ClangFormat.html)

## Building System & Package Manager

1. [Xmake](https://xmake.io/) + [Xrepo](https://xrepo.xmake.io/)
2. [Meson](https://mesonbuild.com/) + [WrapDB](https://mesonbuild.com/Wrapdb-projects.html), [Muon](https://muon.build/)
3. [Premake](https://premake.github.io/)
4. [CMake](https://cmake.org/) + [FetchContent](https://cmake.org/cmake/help/latest/guide/using-dependencies/index.html) / [vcpkg](https://vcpkg.io/) / [Conan](https://conan.io/) / [Hunter](https://hunter.readthedocs.io/en/latest/index.html) / **[CPM.cmake](https://github.com/cpm-cmake/CPM.cmake)** (复杂，但是当前事实标准)
5. [Build2](https://build2.org/)
6. [Boost.Build](https://www.bfgroup.xyz/b2/) (不支持生成 IDE 工程)
7. [GN](https://gn.googlesource.com/gn/) (适用超大型项目，不自带 toolchain 定义)
8. ~~[GYP](https://gyp.gsrc.io/)~~ (已被 gn 取代)
9. [Autotools](https://www.gnu.org/software/autoconf/) (复杂，用于 Unix/Linux 项目)
10. 封闭构建工具
	1. [Bazel](https://github.com/bazelbuild/bazel)
	2. [Buck2](https://buck2.build/)
	3. [Please](https://please.build/)
	4. [Pants](https://www.pantsbuild.org/)
11. [Anaconda](https://anaconda.org/)
12. [Spack](https://spack.io/)
13. [MSYS2 Pacman](https://www.msys2.org/docs/package-management/)
14. [UniGetUI](https://www.marticliment.com/unigetui/):  [Winget](https://learn.microsoft.com/en-us/windows/package-manager/), [Scoop](https://scoop.sh/),  [Chocolatey](https://chocolatey.org/)

## File Comparison

1. [Meld](https://meldmerge.org/)
2. [Kdiff3](https://apps.kde.org/kdiff3/)
3. [Diffuse](https://mightycreak.github.io/diffuse/)
4. [Kompare](https://apps.kde.org/kompare/)

## Documentation Browser

1. [Zeal](https://zealdocs.org/)
2. [DevDocs](https://devdocs.io/)

## Documentation Generator

1. [Doxide](https://doxide.org/)
2. [Doxygen](https://www.doxygen.org/)
3. [NaturalDocs](https://github.com/NaturalDocs/NaturalDocs)

## Project Template

1. [ModernCppStarter](https://github.com/TheLartians/ModernCppStarter)
2. [cmake_template](https://github.com/cpp-best-practices/cmake_template)
3. [modern-cpp-template](https://github.com/filipdutescu/modern-cpp-template)
4. [MiniCppStarter](https://github.com/TheLartians/MiniCppStarter)
## Libraries

1. Graphics
	1. [Raylib](https://www.raylib.com/) ⭐⭐⭐⭐⭐
	2. [SFML](https://www.sfml-dev.org/) ⭐⭐⭐⭐⭐
	3. [Allegro](https://liballeg.org/) ⭐⭐⭐
	4. [Magnum](https://magnum.graphics/)
	5. [Godot](https://godotengine.org/)
	6. [SDL](https://libsdl.org/)
	7. [GLFW](https://www.glfw.org/)
	8. ECS
		1. [EnTT](https://github.com/skypjack/entt)
		2. [Flecs](https://github.com/SanderMertens/flecs)
2. Unit Testing
	1. [doctest](https://github.com/doctest/doctest)
	2. [Catch2](https://github.com/catchorg/Catch2)
3. Logging
	1. [spdlog](https://github.com/gabime/spdlog)
	2. [Nanolog](https://github.com/PlatformLab/NanoLog)
4. Crash reporting
	1. [Backward-cpp](https://github.com/bombela/backward-cpp)
	2. [Cpptrace](https://github.com/jeremy-rifkin/cpptrace)
	3. [Crashpad](https://github.com/chromium/crashpad)
5. HTTP
	1. [cpp-httplib](https://github.com/yhirose/cpp-httplib)
	2. [cpr](https://docs.libcpr.org/)
6. JSON
	1. [nlohmann-json](https://github.com/nlohmann/json)
	2. [simdjson](https://github.com/simdjson/simdjson)
	3. [RapidJSON](https://github.com/Tencent/rapidjson)
	4. [JsonCpp](https://github.com/open-source-parsers/jsoncpp)
7. Command line argument parser
	1. [CLI11](https://cliutils.github.io/CLI11/book/)
	2. [argparse](https://github.com/p-ranav/argparse)
	3. [args](https://github.com/taywee/args)
	4. [clipp](https://github.com/muellan/clipp)
	5. [Lyra](https://github.com/bfgroup/Lyra)
8. UI
	1. CLI
		1. [linenoise](https://github.com/antirez/linenoise)
		2. [replxx](https://github.com/AmokHuginnsson/replxx)
		3. [cli](https://github.com/daniele77/cli)
	2. TUI
		1. [FTXUI](https://arthursonzogni.github.io/FTXUI/) ⭐⭐⭐⭐⭐
		2. [FINAL CUT](https://github.com/gansm/finalcut) ⭐⭐⭐ 依赖 ncurses + Cygwin/MSYS
		3. [imtui](https://github.com/ggerganov/imtui) ⭐⭐⭐ 依赖 imgui，支持 pdcurses
		4. [TermOx](https://github.com/a-n-t-h-o-n-y/TermOx) ⭐ 依赖 Cygwin/MSYS，C++20
		5. [Turbo Vision](https://github.com/magiblot/tvision)
		6. [Oof](https://github.com/s9w/oof) ⭐⭐⭐
		7. [Indicators](https://github.com/p-ranav/indicators/)
		8. [Tabulate](https://github.com/p-ranav/tabulate)
		9. [Notcurses](https://github.com/dankamongmen/notcurses) ⭐
		10. [termbox2](https://github.com/termbox/termbox2) 只有基础 curses 功能
	3. GUI
		1. [libui-ng](https://libui-ng.github.io/libui-ng/)
		2. [FLTK](https://www.fltk.org/)
		3. [Dear ImGui](https://github.com/ocornut/imgui)
		4. [LVGL](https://lvgl.io/)
		5. [Slint](https://slint.dev/)
		6. [Nuklear](https://immediate-mode-ui.github.io/Nuklear/)
		7. [TGUI](https://tgui.eu/)
		8. [wxWidgets](https://wxwidgets.org/)
