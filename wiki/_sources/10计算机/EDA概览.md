# EDA 概览

- **EDA**: Electronic Design Automation
- **CAD**: Computer Aided Design
- **CAE**: Computer Aided Engineering
- **CAM**: Computer Aided Manufacturing

## 前端

1. **High level synthesis(HLS，高级综合)**: 将高级语言（如C/C++、SystemC）或特定DSL转换为RTL代码。
	* 工具示例：[Google XLS](https://google.github.io/xls/)（使用类Rust的 DSLx 语言）
2. **Synthesis(逻辑综合，简称「综合」)**: 跟据 RTL 代码、工艺库(Technology Library) 和设计约束(Design Constraints) 生成门级网表(gate-level netlist)和时序、面积、功耗报告。
	* 商业工具标杆为 Synopsys 的 Design Compiler
3. RTL(Register transfer level) 的硬件描述语言(HDL)：
	* 传统 HDL：Verilog、SystemVerilog、VHDL
	* eDSL(embedded DSL)
		* 基于 Scala：
			* [Chisel](https://www.chisel-lang.org/)
			* [SpinalHDL](https://spinalhdl.github.io/SpinalDoc-RTD/zh_CN/master/index.html)
		* 基于 Python
			* [Amaranth](https://github.com/amaranth-lang/amaranth) (前身 Migen [FHDL](https://m-labs.hk/migen/manual/fhdl.html))
			* [PyGears](https://docs.pygears.org/)
			* [MyHDL](https://www.myhdl.org/)
4. 门级网表格式：
	* Verilog Netlist
	* EDIF(Electronic Design Interchange Format)
## 后端

布局布线，物理验证，生成物理版图。

物理版图格式：
1. PCB： [Gerber](https://www.ucamco.com/en/gerber)
2. IC:
	* GDSII：传统格式，广泛用于晶圆代工厂（Foundry）。
	* OASIS：更现代的格式，文件尺寸更小。

## 开源工具

1. PCB 设计
	1. 设计：[KiCAD](https://www.kicad.org/)
	2. 仿真：[ngspice](https://ngspice.sourceforge.io/)
2. IC 设计
	1. **解释型仿真器​**​（功能完整）：[Icarus Verilog](https://bleyer.org/icarus/) ，[GHDL](https://github.com/ghdl/ghdl)（用于 VHDL），波形查看常用 [GTKWave](https://gtkwave.sourceforge.net/)。
	2. **编译型仿真器​**​（高速）：[Verilator](https://www.veripool.org/verilator/)（将设计编译成C++模型进行仿真）。
	3. 综合: [Yosys](https://yosyshq.net/)
	4. 布局布线：
		* FPGA: [nextpnr](https://github.com/YosysHQ/nextpnr)
		* ASIC:  [OpenROAD](https://theopenroadproject.org/)(也是 RTL-to-GDSII 全流程工具)
