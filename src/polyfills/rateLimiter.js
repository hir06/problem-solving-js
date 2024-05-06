class RateLimiter {
    constructor() {
      this.requests = {};
    }
  
    isAllowed(clientId) {
      const timeInSecs = Math.floor(Date.now() / 1000);
      const allRequests = this.requests[clientId] || [];
      const updatedRequests = allRequests.filter(timeStamp => timeStamp > timeInSecs - 60); // Assuming a 1-minute window
      if (updatedRequests.length >= 100) {
        return false;
      }
      updatedRequests.push(timeInSecs);
      this.requests[clientId] = updatedRequests;
      return true;
    }
  }
  