/// <reference path="AuditTrail.ts" />

namespace App {
  export abstract class Task {
    private auditTrail: AuditTrail;

    constructor() {
      this.auditTrail = new AuditTrail();
    }
    execute() {
      this.auditTrail.record();
      this.doExecute();
    }

    protected abstract doExecute(): void;
  }
}
