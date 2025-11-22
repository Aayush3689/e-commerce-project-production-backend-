export class ApiResponse {
    constructor(statusCode, message = "Success", data = null) {
        this.success = statusCode >= 200 && statusCode < 300
        this.message = message
        this.data = data
    }
}