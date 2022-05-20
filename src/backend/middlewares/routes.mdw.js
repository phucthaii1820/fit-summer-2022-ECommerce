import express from "express";
import indexRouter from '../routes/index.router.js'

export default function (app) {
    app.use('/', indexRouter)
}
