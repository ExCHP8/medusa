import Handlebars from "handlebars"
import { SignatureReflection } from "typedoc"
import { getHookParams } from "../../utils/react-query-utils.js"

export default function () {
  Handlebars.registerHelper(
    "ifHasHookParams",
    function (this: SignatureReflection, options: Handlebars.HelperOptions) {
      return getHookParams(this).length
        ? options.fn(this)
        : options.inverse(this)
    }
  )
}
