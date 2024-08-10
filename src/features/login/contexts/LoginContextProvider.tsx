import React, { createContext, useState, ReactNode } from "react";

interface LoginContextType {
    isLogin: boolean;
    logout: ()=> void;
}


