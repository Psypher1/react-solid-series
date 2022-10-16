import TextField from "@/ui/text-field";

export default function Employee({ name, tags = [], onChange = () => {} }) {
  return (
    <div className="flex flex-col gap-2  mb-6">
      <div>
        <TextField
          value={name}
          onChange={(name) =>
            onChange({
              name,
              tags,
            })
          }
        />
      </div>
      <div>
        {tags.map(({ label }, i) => (
          <div key={i}>{label}</div>
        ))}
      </div>
    </div>
  );
}
