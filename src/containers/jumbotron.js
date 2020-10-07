import React from "react";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Snippet } from "../components";
const sample = `
class Entity

  @@instances = 0

  def initialize
    @@instances += 1
    @number = @@instances
  end

  def who_am_i
   "I'm #{@number} of #{@@instances}" 
  end
  
  def self.total
    @@instances
  end
end

entities = Array.new(9) { Entity.new }

entities[6].who_am_i  # => "I'm 7 of 9"
Entity.total          # => 9
`;
export function JumboContainer() {
  return (
    <Snippet>
      <Snippet.SyntaxHighLighter
        language="ruby"
        style={atomDark}
        showLineNumbers
      >
        {sample}
      </Snippet.SyntaxHighLighter>
    </Snippet>
  );
}
