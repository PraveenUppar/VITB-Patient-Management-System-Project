import { useSpring, animated } from "react-spring";

const Action = () => {
  const fadeInProps = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: { tension: 170, friction: 20 },
    delay: 200,
  });

  const buttonSpring = useSpring({
    from: { scale: 1 },
    to: async (next) => {
      while (true) {
        await next({ scale: 1.05 });
        await next({ scale: 1 });
      }
    },
    config: { tension: 200, friction: 12 },
  });

  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <animated.h2
            style={fadeInProps}
            className="text-3xl font-semibold mb-4 text-gray-900"
          >
            Streamlining hospital operations and improving patient care through
            an intuitive and integrated management platform.
          </animated.h2>
        </div>
      </section>
    </div>
  );
};

export default Action;
