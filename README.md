# ReactTodo

## Node
1. 修改**React Native**为指定版本

    ``` bash
    # 修改版本为v0.38.0
    $ yarn add react-native@^0.38.0
    ```
2. 当**Java**代码修改后，使用`reload`是无法完成热更新的
3. **TODO** runOnUiThread(Runnable runnable) 在主线程运行，但是发现`Toast`不包裹在里也能运行？？？
4. `DrawerLayoutAndroid`的`renderNavigationView`为必选项
    
    > Tips
    > 当我们需要`navigationView`中子布局充满`navigationView`时,
    > `DrawerLayoutAndroid`的`drawerWidth`必须设置
5. 安装第三方库
    
    ``` bash
    # 通常第三方库都会在**README**里写好了**npm**的安装方式
    $ npm i react-native-action-button --save
    # **Yarn**安装方式
    $ yarn add react-native-action-button
    ```
6. [对组件的引用（refs）](http://reactnative.cn/post/608)

## Thanks
[react-native-action-button](https://github.com/mastermoo/react-native-action-button)<br>

[react-native-scrollable-tab-view](https://github.com/skv-headless/react-native-scrollable-tab-view)<br>

[react-native-check-box](https://github.com/crazycodeboy/react-native-check-box)<br>