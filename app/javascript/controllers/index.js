// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller

import { application } from "./application"

import ModalController from "./modal_controller"
application.register("modal", ModalController)

import ModalUserController from "./modal_user_controller"
application.register("modal-user", ModalUserController)

import AutohideFlashController from "./autohide_flash_controller"
application.register("autohide-flash", AutohideFlashController)

import AlertController from "./alert_controller"
application.register("alert", AlertController)

import UtilsController from "./utils_controller"
application.register("utils", UtilsController)
