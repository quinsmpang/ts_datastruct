// import * as Chai from "chai";
// import * as nubes from "../index";

// class TestA {
//     public num: number;
//     public bool: boolean;
//     constructor(v1: number, v2: boolean) {
//         this.num = v1;
//         this.bool = v2;
//     }
// }

// type TestB = number;

// const assert = Chai.assert;
// const expect = Chai.expect;

// describe("List", () => {
//     let a: nubes.List<TestA>;
//     let b: nubes.List<TestB>;

//     it("construction and initialization", () => {
//         a = new nubes.List<TestA>();
//         b = new nubes.List<TestB>();
//     });

//     it("#add()", () => {
//         a.add(new TestA(1, true));
//         assert.equal(a.get(0).bool, true);
//         assert.equal(a.get(0).num, 1);
//         b.add(0.1);
//         assert.equal(b.get(0), 0.1);
//     });

//     it("#insert()", () => {
//         a.insert(0, new TestA(2, false));
//         assert.equal(a.get(0).bool, false);
//         assert.equal(a.get(0).num, 2);
//         b.insert(0, 0.2);
//         assert.equal(b.get(0), 0.2);
//     });

//     it("#count", () => {
//         expect(a.count).equal(2);
//         expect(b.count).equal(2);
//     });

//     it("#reverse()", () => {
//         a.reverse();
//         assert.equal(a.get(0).bool, true);
//         assert.equal(a.get(0).num, 1);
//         b.reverse();
//         assert.equal(b.get(0), 0.1);
//     });

//     it("#set()", () => {
//         a.set(0, new TestA(3, true));
//         assert.equal(a.get(0).num, 3);
//         b.set(0, 0.3);
//         assert.equal(b.get(0), 0.3);
//     });

//     it("#indexOf() [TestB only]", () => {
//         // assert.equal(a.indexOf(new TestA(2,false)),1);
//         assert.equal(b.indexOf(0.2), 1);
//     });

//     it("#contains() [TestB only]", () => {
//         // assert.equal(a.contains(new TestA(3,true)),true);
//         assert.equal(b.contains(0.3), true);
//     });

//     it("#remove() [TestB only]", () => {
//         // a.remove(new TestA(3,true));
//         // assert.equal(a.get(0).bool, false);
//         // assert.equal(a.get(0).num, 2);
//         b.remove(0.3);
//         assert.equal(b.get(0), 0.2);
//     });

//     it("#removeAt() [TestB only]", () => {
//         // a.add(new TestA(4,false));
//         // a.removeAt(0);
//         // assert.equal(a.get(0).bool, false);
//         // assert.equal(a.get(0).num, 4);
//         b.add(0.4);
//         b.removeAt(0);
//         assert.equal(b.get(0), 0.4);
//     });

//     it("#clear()", () => {
//         a.clear();
//         assert.equal(a.count, 0);
//         b.clear();
//         assert.equal(b.count, 0);
//     });
// });

// describe("Queue", () => {
//     let a: nubes.Queue<TestA>;
//     let b: nubes.Queue<TestB>;

//     it("construction and initialization", () => {
//         a = new nubes.Queue<TestA>();
//         b = new nubes.Queue<TestB>();
//     });

//     it("#enqueue()", () => {
//         a.enqueue(new TestA(1, true));
//         a.enqueue(new TestA(2, false));
//         b.enqueue(0.1);
//         b.enqueue(0.2);
//         expect(a.count).equal(2);
//         expect(b.count).equal(2);
//     });

//     it("#peek()", () => {
//         expect(a.peek().bool).equal(true);
//         expect(b.peek()).equal(0.1);
//     });

//     it("#dequeue()", () => {
//         expect(a.dequeue().num).equal(1);
//         expect(b.dequeue()).equal(0.1);
//         expect(a.count).equal(1);
//         expect(a.count).equal(1);
//     });
// });

// describe("Stack", () => {
//     let a: nubes.Stack<TestA>;
//     let b: nubes.Stack<TestB>;

//     it("construction and initialization", () => {
//         a = new nubes.Stack<TestA>();
//         b = new nubes.Stack<TestB>();
//     });

//     it("#push()", () => {
//         a.push(new TestA(1, true));
//         a.push(new TestA(2, false));
//         b.push(0.1);
//         b.push(0.2);
//         expect(a.count).equal(2);
//         expect(b.count).equal(2);
//     });

//     it("#peek()", () => {
//         expect(a.peek().num).equal(2);
//         expect(b.peek()).equal(0.2);
//     });

//     it("#pop()", () => {
//         expect(a.pop().bool).equal(false);
//         expect(b.pop()).equal(0.2);
//         expect(a.count).equal(1);
//         expect(b.count).equal(1);
//     });
// });

// describe("Dictinoary", () => {
//     let a: nubes.Dictionary<string, TestA>;
//     let b: nubes.Dictionary<number, TestB>;

//     it("construction and initialization", () => {
//         a = new nubes.Dictionary<string, TestA>();
//         b = new nubes.Dictionary<number, TestB>();
//     });

//     it("#addKeyValue() and #add()", () => {
//         a.addKeyValue("a", new TestA(1, true));
//         a.addKeyValue("b", new TestA(2, false));
//         b.add([1, 0.1]);
//         b.add([2, 0.2]);
//         expect(a.count).equal(2);
//         expect(b.count).equal(2);
//     });

//     it("#containsKeyValue()", () => {
//         expect(a.containsKeyValue("a")).equal(true);
//         expect(b.containsKeyValue(2)).equal(true);
//     });

//     it("#removeKeyValue()", () => {
//         a.removeKeyValue("b");
//         b.removeKeyValue(1);
//         expect(a.count).equal(1);
//         expect(b.count).equal(1);
//     });

//     it("#tryGetValue()", () => {
//         expect(a.tryGetValue("a")[0]).equal(true);
//         expect(a.tryGetValue("c")[0]).equal(false);
//         expect(b.tryGetValue(2)[1]).equal(0.2);
//     });

//     it("#get()", () => {
//         expect(a.get("a").bool).equal(true);
//         expect(b.get(2)).equal(0.2);
//     });

//     it("#set()", () => {
//         a.set("a", new TestA(3, true));
//         b.set(2, 0.3);
//         expect(a.get("a").num).equal(3);
//         expect(b.get(2)).equal(0.3);
//     });
// });

// describe("Seq", () => {
//     let a = new nubes.List<TestA>();

//     it("construction and initialization", () => {
//         for (const i of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
//             if (i % 2 == 0) {
//                 a.add(new TestA(i, true));
//             } else {
//                 a.add(new TestA(i, false));
//             }
//         }
//     });

//     it("Seq.find", () => {
//         const result = nubes.Seq.find(b => b.bool == true, a);
//         expect(result.num).equal(2);
//     });

//     it("Seq.findAll", () => {
//         const result = nubes.Seq.findAll(b => b.bool == false, a);
//         expect(result.count).equal(5);
//     });

//     it("Seq.map", () => {
//         const result = nubes.Seq.map((b) => {
//             return new TestA(b.num + 2, b.bool);
//         }, a);
//         expect(nubes.Seq.get(0, result).num).equal(3);
//     });

//     it("Seq.reduce", () => {
//         const result = nubes.Seq.reduce((x, y) => {
//             return new TestA(x.num + y.num, x.bool > y.bool);
//         }, a);
//         expect(result.num).equal(45);
//     });

//     it("Seq.get", () => {
//         const result = nubes.Seq.get(0, a);
//         expect(result.num).equal(1);
//     });

//     it("Seq complex operation test 1", () => {
//         const Seq = nubes.Seq;
//         let a1 = new nubes.List<number>();
//         for (const i of [1, 2, 3, 4, 5, 6, 7, 8, 9])
//             a1.add(i);

//         const result = Seq.reduce((x, y) => { return x + y }, Seq.map(b => b * b, a1));
//         expect(result).equal(285);
//     });

//     it("Seq complex operation test 2", () => {
//         const Seq = nubes.Seq;
//         let a1 = new nubes.List<number>();
//         for (const i of [1, 2, 3, 4, 5, 6, 7, 8, 9])
//             a1.add(i);

//         const result = Seq.findAll(c => c > 10, Seq.map(b => b * b, a1));
//         expect(Seq.get(0, result)).equal(16);
//     });
// });