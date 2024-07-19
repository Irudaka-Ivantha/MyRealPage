import React from 'react';

const RememberMe = () => (
    <div className="flex items-center">
      <input id="remember-me" name="remember-me" type="checkbox"
        className="w-4 h-4 text-primary border-zinc-300 rounded focus:ring-primary" />
      <label htmlFor="remember-me" className="block ml-2 text-sm text-zinc-900"> Remember me </label>
    </div>
  );

  export default RememberMe;