// https://medium.com/@Charles_Stover/writing-testable-react-components-with-hooks-23441ee582d5

// import * as hooks from './hooks';
// const STATE_SPY = jest.spyOn(hooks, 'useComponentName');
// const CLICK_HANDLER = jest.fn();
// STATE_SPY.mockReturnValue({
//   handleClick: CLICK_HANDLER,
//   total: 5,
// });
// const { container } = render(<ComponentName />);
// expect('5').toBeInTheDocument();
// act(() => {
//   container.click();
// });
// expect(CLICK_HANDLER).toHaveBeenCalled();

// NOTE each anchor is a return prop of the hook
describe("useComponentName", () => {
  // ANCHOR handleClick
  describe("handleClick", () => {
    it("should increment total by 1", () => {
      // GIVEN a state with no parameters
      //   const { result } = renderHook(() => useComponentName());
      //   expect(result.current.total).toBe(0);
      //
      // WHEN I fire the click event handler
      //   act(() => {
      //     result.current.handleClick();
      //   });
      //
      // THEN I expect total to increment by 1
      // expect(result.current.total).toBe(1);
    });
  });

  // ANCHOR total
  describe("total", () => {
    it("should default to 0", () => {
      // const { result } = renderHook(() => useComponentName());
      // expect(result.current.total).toBe(0);
    });
  });
});
