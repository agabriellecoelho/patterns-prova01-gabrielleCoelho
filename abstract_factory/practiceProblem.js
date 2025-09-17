// Classes concretas
class PdfReport {
  generate() {
    return "Relatório em PDF gerado!";
  }
}

class PdfInvoice {
  generate() {
    return "Fatura em PDF gerada!";
  }
}

class DocxReport {
  generate() {
    return "Relatório em DOCX gerado!";
  }
}

class DocxInvoice {
  generate() {
    return "Fatura em DOCX gerada!";
  }
}

// Abstract Factory
class ReportFactory {
  createReport() {
    throw new Error("Método abstrato deve ser implementado");
  }
  createInvoice() {
    throw new Error("Método abstrato deve ser implementado");
  }
}

// Concrete Factories
class PdfFactory extends ReportFactory {
  createReport() {
    return new PdfReport();
  }
  createInvoice() {
    return new PdfInvoice();
  }
}

class DocxFactory extends ReportFactory {
  createReport() {
    return new DocxReport();
  }
  createInvoice() {
    return new DocxInvoice();
  }
}

const factories = {
  pdf: new PdfFactory(),
  docx: new DocxFactory()
}

class ReportApp {
  constructor(factory) {
    this.report = factory.createReport();
    this.invoice = factory.createInvoice();
  }

  startReport() {
    console.log(this.report.generate());
    console.log(this.invoice.generate());
  }
}

//Uso
function main() {
  const types = ["pdf", "docx"];

  types.forEach((type) => {
    console.log(`\n>> Formato selecionado: ${type} <<`);
    const factory = factories[type];
    if (!factory) throw new Error("Tipo de formato desconhecido");

    const app = new ReportApp(factory);
    app.startReport();
  });
}

main();


// Cliente
/*function main(format) {
  let report, invoice;

  if (format === "pdf") {
    report = new PdfReport();
    invoice = new PdfInvoice();
  } else if (format === "docx") {
    report = new DocxReport();
    invoice = new DocxInvoice();
  } else {
    throw new Error("Formato não suportado");
  }

  console.log(report.generate());
  console.log(invoice.generate());
}

main("pdf");
main("docx");*/
