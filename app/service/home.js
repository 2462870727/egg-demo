// eslint-disable-next-line strict
const { Service } = require("egg");
const Mock = require("mockjs");

class homeService extends Service {
	/**
	 * create todo
	 * @param {Todo} todo - todo info without `id`, but `title` required
	 */
	async get() {
		// validate

		// normalize

		const data = Mock.mock({
			// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
			"list|1-10": [
				{
					// 属性 id 是一个自增数，起始值为 1，每次增 1
					"id|+1": 1,
				},
			],
			"total|1-100": 1,
			"pageSize|1-10": 1,
			"pageNum|1-10": 1,
		});

		const result = {
			code: 0,
			data,
			message: "success",
		};
		return result;
	}

	async post(user) {
		// user.completed = false;

		// this.store.push(user);

		// console.log(this.store);
		const result = {
			code: 0,
			data: user.id,
			message: "success",
		};
		return result;
	}
}

module.exports = homeService;
