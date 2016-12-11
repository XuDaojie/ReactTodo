# ReactTodo

1. 修改**ReactNavtive**为指定版本
    ``` bash
    # 修改版本为v0.38.0
    $ yarn add react-native@^0.38.0
    ```
2. 当**Java**代码修改后，使用`reload`是无法完成热更新的
3. TODO runOnUiThread(Runnable runnable) 在主线程运行，但是发现`Toast`不包裹在里也能运行？？？