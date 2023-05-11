var tipuesearch = {"pages": [{'title': 'About', 'text': '網站 ： https://mdecd2023.github.io/2b2-pj2bg5/content/index.html \n 倉儲連結 ： https://github.com/mdecd2023/2b2-pj2bg5 \n 組長：41023218 snowfall-killer \n 組員：41023216 41023216 \n 組員：41023213 41023213 \n 組員：41023225 xiaomantou0411 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'w9', 'text': '', 'tags': '', 'url': 'w9.html'}, {'title': '41023213-1', 'text': '解決 git pull 問題 \n', 'tags': '', 'url': '41023213-1.html'}, {'title': '41023216-1', 'text': '今天讓我知道原來可以利用 zmqRemoteAPI 通過 23000 port 控制BubbleRob robots，進行遠端操控。 \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n', 'tags': '', 'url': '41023216-1.html'}, {'title': 'w10', 'text': 'Q1.What is zmqRemoteAPI, and how does it relate to CoppeliaSim? \n A :zmqRemoteAPI 是 CoppeliaSim 的遠端 API 實現。CoppeliaSim 是一個機器人仿真軟體，而 zmqRemoteAPI 則是用於與 CoppeliaSim 進行通訊的 API 入口。通過 zmqRemoteAPI，使用者可以通過編程語言（例如 Python、Matlab、C++等）來控制 CoppeliaSim 中的機器人，進行仿真測試、控制算法開發等。 \n Q2.How do you establish a connection between a Python script and CoppeliaSim using zmqRemoteAPI? \n A: \n pyzmq通過pip install pyzmq在終端中運行來安裝庫。 \n File -> Preferences -> Remote API在 CoppeliaSim 中，通過選中復選框啟用遠程 API Enable remote API server。 \n 在您的 Python 腳本中，導入zmq和msgpack模塊： Python \n import zmq import msgpack \n 創建zmq.Context對象： Python \n context = zmq.Context() \n zmq.Socket為連接創建一個對象： Python \n socket = context.socket(zmq.REQ) \n 使用 IP 地址和端口號連接到 CoppeliaSim 遠程 API 服務器： Python \n socket.connect("tcp://127.0.0.1:19997") 注意：IP 地址和端口號應與 VoppeliaSim 的遠程 API 首選項中指定的相匹配。 \n 現在您可以使用該zmqRemoteApi模塊從您的 Python 腳本調用 CoppeliaSim 函數。例如，要獲取具有 handle 的對象的位置objHandle，可以使用以下simxGetObjectPosition函數： Python \n import zmqRemoteApi \n # Get the position of the object returnCode, pos = zmqRemoteApi.simxGetObjectPosition(socket, objHandle, -1, zmqRemoteApi.simx_opmode_blocking) \n # Check if the function call was successful if returnCode == zmqRemoteApi.simx_return_ok:  print("Object position:", pos) else:  print("Failed to get object position") 注意：simx_opmode_blocking參數指定函數應該阻塞，直到收到來自 CoppeliaSim 的響應。如果您不希望函數阻塞，也可以使用非阻塞模式。 \n 使用完遠程 API 後，關閉套接字： Python \n socket.close() 並終止上下文： Python \n context.term() 就是這樣！通過這些步驟，您應該能夠使用 zmqRemoteAPI 在 Python 腳本和 CoppeliaSim 之間建立連接。 \n Q3.What are some common use cases for zmqRemoteAPI in CoppeliaSim? \n A:\xa0 \n 1.控制和監控模擬：使用 zmqRemoteAPI，您可以向 CoppeliaSim 發送命令以啟動、暫停、恢復或停止模擬。您還可以檢索數據，例如傳感器讀數、關節位置和對象位置，以進行分析和控制。 \n 2.創建自定義控制器：在 zmqRemoteAPI 的幫助下，您可以創建自定義控制器來進行通信 \n Q4.What are the advantages and disadvantages of using zmqRemoteAPI compared to other methods of communication between Python and CoppeliaSim? \n A:\xa0 \n 高性能：zmqRemoteAPI 是一種輕量級的高性能通信協議，這意味著它可以以最小的延遲和開銷處理大量數據。 易於使用：zmqRemoteAPI 易於設置和使用，並提供用於在 Python 和 CoppeliaSim 之間發送和接收數據的簡單接口。 跨平台：zmqRemoteAPI是跨平台的，這意味著它可以在不同的操作系統和架構上使用而無需任何修改。 實時通信：zmqRemoteAPI 支持實時通信，這對於控制機器人系統和仿真很重要。 可定制：zmqRemoteAPI 是高度可定制的，這意味著它可以根據特定的用例和要求進行調整。 zmqRemoteAPI 的缺點： \n 功能有限：與 ROS 等提供廣泛工具和庫的其他通信協議相比，zmqRemoteAPI 提供的功能有限。 需要額外的軟件：zmqRemoteAPI 需要安裝 ZeroMQ，這可能會增加系統的額外開銷和復雜性。 缺乏文檔：與其他通信協議相比，zmqRemoteAPI 的文檔相對稀疏，這可能會使初學者更難使用。 安全問題：zmqRemoteAPI 沒有內置的安全功能，這意味著它可能容易受到攔截、修改或拒絕服務等攻擊。 總的來說，zmqRemoteAPI 是一個強大而靈活的通信協議，可以在 Python 和 CoppeliaSim 之間提供高性能和實時通信。 但是，它的使用可能會受到其功能和文檔以及需要通過其他措施解決的安全問題的限制。 \n Q5.Can you give an example of a project or task that you could complete using zmqRemoteAPI in CoppeliaSim? \n A: \n 假設我們想在 CoppeliaSim 中構建機器人手臂模擬並使用 Python 控制它。 我們可以使用 zmqRemoteAPI 在模擬和我們的 Python 程序之間建立通信通道，允許我們向機器人手臂發送命令並從其傳感器接收數據。 \n 首先，我們將在 CoppeliaSim 中創建一個機器人手臂模型，並配有關節控制器和傳感器。 然後，我們將使用 CoppeliaSim 提供的 Python API 從我們的 Python 程序建立一個到模擬的 zmqRemoteAPI 連接。 \n 使用 zmqRemoteAPI，我們可以向機器人手臂發送命令，例如更改其關節的位置或將其抓手設置為打開或關閉。 我們還可以從機器人手臂上的傳感器接收數據，例如它的當前位置、速度和傳感器讀數。 \n 通過將 CoppeliaSim 和 zmqRemoteAPI 與 Python 相結合，我們可以構建一個強大而靈活的機器人模擬，可以實時控制和監控，使我們能夠更高效地測試和開發我們的機器人應用程序。 \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '場景 \xa0 藍球   紅球 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w11-41023218', 'text': '', 'tags': '', 'url': 'w11-41023218.html'}, {'title': '41023225', 'text': '', 'tags': '', 'url': '41023225.html'}, {'title': '41023213-2', 'text': '負責場景 \n 自評:65分 \n 心得:第一次匯入場景 還有增加場景的感測器 很有難度 \n', 'tags': '', 'url': '41023213-2.html'}, {'title': '41023216-2', 'text': '我負責完成機器人的運動程式 \n 自評:65分 \n 心得:這次在做足球對打，是自己第一次做，途中遇到很多問題，謝謝同學跟老師幫助，讓我可以完成。 \n', 'tags': '', 'url': '41023216-2.html'}, {'title': 'Brython 程式環境', 'text': '亂數 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n \n', 'tags': '', 'url': 'Brython 程式環境.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Brython_ex2', 'text': 'This code uses the Euler method to approximate the solution to the ODE dy/dx = x - y with an initial condition of y0 = 1.0. The solution is calculated for a range of x values from 0 to 5. \n \n \n \n \n Solve ODE: \n from browser import document\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new paragraph element and set its text content to the solution\np = document.createElement(\'p\')\np.textContent = f"The solution to the ODE is: {y}"\n\n# Append the paragraph element to the body of the webpage\ndocument.body.appendChild(p) \n \n \n \n \n \n Brython environment and  Plotly.js : \n <script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\']});\n}\n// ]]></script>\n<p id="brython_div"></p> \n Brython programe with Plotly.js: \n from browser import document, window\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new div element to hold the plot\n#plot_div = document.createElement(\'div\')\n#plot_div.id = \'plot\'\n#document.body.appendChild(plot_div)\nplot_div = document["brython_div"]\n\n# Plot the solution using plotly.js\ndata = [{\'x\': x, \'y\': y}]\nwindow.Plotly.newPlot(\'brython_div\', data) \n This code defines a function dy_dx that represents the mass-spring-damper ordinary differential equation. The Euler method is used to solve this equation for a range of x values from 0 to 20 with initial conditions of y0 = [1.0, 0.0]. The solution is then plotted on the webpage using  plotly.js . \n \n \n This code defines a function dy_dx that represents the mass-spring-damper system with a PID controller. The gains of the PID controller are set to Kp = 10.0, Ki = 1.0, and Kd = 0.5. The Euler method is used to solve this system of equations for a range of x values from 0 to 20 with initial conditions of y0 = [0.0, 0.0, 0.0, 0.0]. The response of the system is then plotted on the webpage using  plotly.js . \n \n \n \n \n \n \n \n STL part viewer \n \n \n Using  sine-cosine algorithm  to optimize with constraints in Brython: \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n Plot the result by using  plotly.js : \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n<div id="plot"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n\n# Plot the result using Plotly.js\ndata = [\n    {\n        \'x\': [best_solution[0]],\n        \'y\': [best_solution[1]],\n        \'mode\': \'markers\',\n        \'marker\': {\'size\': 12},\n        \'name\': \'Best Solution\'\n    }\n]\n\nlayout = {\n    \'xaxis\': {\'range\': [-10, 10]},\n    \'yaxis\': {\'range\': [-10, 10]},\n}\n\nPlotly.newPlot(\'plot\', data, layout)\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n', 'tags': '', 'url': 'Brython_ex2.html'}]};