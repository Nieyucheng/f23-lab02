package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.*;

public class Renderer {
    private Shape someShape;
    
    Renderer(Shape someShape) {
        this.someShape = someShape;
    }

    void draw() {
        double area = someShape.getArea();

        // assume implementation

        System.out.println("Shape printed\n" + "Its area is " + area);
    }
}
