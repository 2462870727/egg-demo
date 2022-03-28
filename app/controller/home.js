const { Controller } = require("egg");

class HomeController extends Controller {
	/**@get 获取数据 */
	async get() {
		const { ctx, service } = this;

		const result = await service.home.get();
		console.log(result);

		ctx.body = result;

		ctx.status = 200;
	}

	/**@post 提交数据 */
	async post() {
		const { ctx, service } = this;

		console.log("body", ctx.request.body);
		const result = await service.home.post(ctx.request.body);
		// console.log(result);

		ctx.body = result;
		ctx.status = 200;
	}
}

module.exports = HomeController;
