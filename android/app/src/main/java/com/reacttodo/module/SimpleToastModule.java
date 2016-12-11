package com.reacttodo.module;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.UiThreadUtil;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by xdj on 2016/12/11.
 */

//@ReactModule(name = "SimpleToastModule")
public class SimpleToastModule extends ReactContextBaseJavaModule {

    private static final String DURATION_LONG = "LONG";
    private static final String DURATION_SHORT = "SHORT";

    public SimpleToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "SimpleToastAndroid";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_LONG, Toast.LENGTH_LONG);
        constants.put(DURATION_SHORT, Toast.LENGTH_SHORT);
        return constants;
    }

    @ReactMethod
    public void show(final String message, final int duration) {
        UiThreadUtil.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(getReactApplicationContext(), message, duration).show();
            }
        });
    }
}
