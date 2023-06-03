var MathUtilities = {
    Type: {
        int: function int(a) {
            return Math.floor(a);
        }
    },
    Build: {
        buildnum: function buildnum(minimal, maximum) {
            var output = minimal;
            var mode = "grow";
            if (mode == "grow") {
                output++;
            } else if (mode == "decrease") {
                output--;
            }
            if (output == maximum && mode == "grow") {
                mode = "decrease";
            } else if (output == minimal && mode == "decrease") {
                mode = "grow";
            }
            return output;
        }
    },
    Nums: {
        InfinitySqrt: Math.sqrt(Infinity),
        GI: Math.PI*(109/5),
        TerrifyingNumber: 0
    }
}
