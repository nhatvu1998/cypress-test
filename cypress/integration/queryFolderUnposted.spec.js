import setting from "../../setting.json";

describe("viewport", () => {
  beforeEach(() => {
    cy.viewport(setting.viewportWidth, setting.viewportHeight);
  });

  describe("Test Folder Grid", () => {
    it("Đăng nhập", () => {
      cy.visit("devcloud1.digihcs.com:11430");
      cy.login();
    });

    it("truy cập vào mục bài chưa đăng", () => {
      cy.wait(setting.waitdata * 2);
      cy.contains("Đăng bài").click({ force: true, delay: 300 });
      cy.wait(setting.waitdata * 2);
      cy.contains("Bài Chưa Đăng")
        .should("be.visible")
        .click({ force: true, delay: 300 });
      cy.wait(setting.waitdata * 2);

      cy.get(
        'div[row-index="0"] > div[col-id="ag-Grid-AutoColumn"]'
      ).dblclick();
      cy.wait(setting.waitdata * 2);

      cy.get(
        'div[row-index="0"] > div[col-id="ag-Grid-AutoColumn"]'
      ).dblclick();
      cy.wait(setting.waitdata * 2);

      cy.get(
        'div[row-index="1"] > div[col-id="ag-Grid-AutoColumn"]'
      ).dblclick();
      cy.wait(setting.waitdata * 2);

      cy.get(
        'div[row-index="2"] > div[col-id="ag-Grid-AutoColumn"]'
      ).dblclick();
      cy.wait(setting.waitdata * 2);

      cy.get(
        'div[row-index="3"] > div[col-id="ag-Grid-AutoColumn"]'
      ).dblclick();
      cy.wait(setting.waitdata * 2);
    });
    it("re-open folder", () => {
      cy.wait(setting.waitdata * 2);
      cy.get(
        'div[row-index="0"] > div[col-id="ag-Grid-AutoColumn"]'
      ).dblclick();
      cy.wait(setting.waitdata * 2);
      cy.get(
        'div[row-index="0"] > div[col-id="ag-Grid-AutoColumn"]'
      ).dblclick();
    });
  });
});
