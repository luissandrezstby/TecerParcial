class Empleado {
    constructor(id, nombre, area, salario) {
        this.id = id;
        this.nombre = nombre;
        this.area = area;
        this.salario = salario;
    }
}

class Empresa {
    constructor() {
        this.empleados = [];
    }

    agregarEmpleado(id, nombre, area, salario) {
        const nuevoEmpleado = new Empleado(id, nombre, area, salario);
        this.empleados.push(nuevoEmpleado);
    }

    consultarEmpleados() {
        return this.empleados;
    }

    consultarEmpleado(id) {
        return this.empleados.find(empleado => empleado.id === id);
    }

    eliminarEmpleado(id) {
        const index = this.empleados.findIndex(empleado => empleado.id === id);
        if (index !== -1) {
            this.empleados.splice(index, 1);
        }
    }

    empleadosPorArea(area) {
        return this.empleados.filter(empleado => empleado.area === area);
    }

    empleadoMayorSalario() {
        return this.empleados.reduce((max, empleado) => empleado.salario > max.salario ? empleado : max, this.empleados[0]);
    }
}

const miEmpresa = new Empresa();

miEmpresa.agregarEmpleado(1, 'Juan', 'Ventas', 3000);
miEmpresa.agregarEmpleado(2, 'Ana', 'Marketing', 3500);
miEmpresa.agregarEmpleado(3, 'Pedro', 'Ventas', 4000);
miEmpresa.agregarEmpleado(4, 'Lucía', 'Desarrollo', 4500);

console.log("Todos los empleados:", miEmpresa.consultarEmpleados());
miEmpresa.eliminarEmpleado(2);
miEmpresa.eliminarEmpleado(3);
console.log("Empleados eliminados con ID 2 y ID 3:", miEmpresa.consultarEmpleados());
console.log("Empleados en el área de Ventas:", miEmpresa.empleadosPorArea('Ventas'));
console.log("Empleados en el área de Desarrollo:", miEmpresa.empleadosPorArea('Desarrollo'));
console.log("Empleado con mayor salario:", miEmpresa.empleadoMayorSalario());